/* eslint-disable camelcase */
import ecomAuth from '@ecomplus/auth'
import EcomApps from '@ecomplus/apps-manager'

const isMinor = (newVersion, oldVersion) => {
  return newVersion.split('.')[0] === oldVersion.split('.')[0]
}

const listInstalledApps = ({ ecomApps, marketApps }) => {
  return new Promise((resolve, reject) => {
    ecomApps.list()
      .then((installedApps) => {
        return resolve({ ecomApps, marketApps, installedApps })
      }).catch(error => reject(error))
  })
}

const findOutdatedApps = ({ ecomApps, marketApps, installedApps }) => {
  const outdatedApps = installedApps
    .filter(app => {
      const { version } = marketApps.find(({ id }) => id === app.app_id) || ''
      return app && version ? version !== (app || {}).version : false
    })
  return { ecomApps, marketApps, installedApps, outdatedApps }
}

const updateApps = ({ ecomApps, marketApps, outdatedApps }) => {
  const promises = []
  for (const outdatedApp of outdatedApps) {
    const marketApp = marketApps.find(({ id }) => outdatedApp.app_id === id)
    promises.push(updateApp({ ecomApps, marketApp, outdatedApp }))
  }
  return Promise.all(promises)
}

const requestManualUpdate = (marketApp, outdatedApp) => {
  postMessage(marketApp, outdatedApp)
}

const updateApp = ({ ecomApps, marketApp, outdatedApp }) => {
  return new Promise((resolve, reject) => {
    return ecomApps.findOnMarket(marketApp.id)
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
        return requestManualUpdate(marketApp, outdatedApp)
      }).catch(error => reject(error))
  })
}

addEventListener('message', event => {
  const { username, password, storeId, marketApps } = event.data
  ecomAuth.login(username, password, storeId).then(() => {
    const ecomApps = new EcomApps.Constructor(ecomAuth)
    if (ecomAuth.checkLogin()) {
      listInstalledApps({ ecomApps, marketApps })
        .then(findOutdatedApps)
        .then(updateApps)
    }
  })
})
