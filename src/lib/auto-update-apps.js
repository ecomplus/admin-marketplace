/* eslint-disable camelcase */
const isMinor = (newVersion, oldVersion) => {
  return newVersion.split('.')[0] === oldVersion.split('.')[0]
}

const findOutdatedApps = (ecomApps, marketApps) => {
  return new Promise((resolve, reject) => {
    ecomApps.list()
      .then((data) => {
        const outdatedApps = data
          .filter(app => {
            const { version } = marketApps.find(({ id }) => id === app.app_id) || ''
            return app && version ? version !== (app || {}).version : false
          })
        return resolve(outdatedApps)
      })
      .catch(error => reject(error))
  })
}

const updateApp = (ecomApps, outdatedApp) => {
  return new Promise((resolve, reject) => {
    return ecomApps.findOnMarket(outdatedApp.app_id)
      .then(app => {
        const { store_app } = app
        store_app.version_date = new Date(store_app.version_date)
        if (store_app && isMinor(store_app.version, outdatedApp.version)) {
          return ecomApps.edit(outdatedApp._id, store_app)
            .then(() => {
              console.log(`[updated:${store_app.title}] oldVersion: ${outdatedApp.version} newVersion: ${store_app.version}`)
              return resolve()
            })
            .catch(error => reject(error))
        }
        return resolve(requestManualUpdate(outdatedApp))
      }).catch(error => reject(error))
  })
}

let queuedApps = []
let requestManualUpdate

const nextAppUpdate = (ecomApps) => {
  const app = queuedApps.splice(0, 1)[0]
  if (!app) {
    console.log('[finish update apps]')
    return
  }
  updateApp(ecomApps, app)
    .then()
    .catch(error => console.error('[ERROR TO UPDATE APP: ]', error))
    .finally(() => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => nextAppUpdate(ecomApps))
      } else {
        setTimeout(() => nextAppUpdate(ecomApps), 300)
      }
    })
}

const startQueue = (ecomApps, marketApps) => {
  console.log('[start queueUpdateApps]')
  findOutdatedApps(ecomApps, marketApps)
    .then(outDatedApps => {
      queuedApps = outDatedApps
      console.log(`[apps to update]: ${queuedApps.length}`)
      nextAppUpdate(ecomApps)
    })
    .catch((error) => Promise.reject(error))
}

export const queueUpdateApps = (ecomApps, marketApps, manualUpdateCallback) => {
  requestManualUpdate = manualUpdateCallback
  if (ecomApps.ecomAuth.checkLogin()) {
    return startQueue(ecomApps, marketApps)
  }
  ecomApps.ecomAuth.on('login', () => startQueue(ecomApps, marketApps))
}
