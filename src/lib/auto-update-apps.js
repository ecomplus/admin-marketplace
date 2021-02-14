const isMinor = (newVersion, oldVersion) => {
  return newVersion.split('.')[0] === oldVersion.split('.')[0]
}

const findOutdatedApps = (ecomApps, marketApps) => {
  return new Promise((resolve, reject) => {
    ecomApps.list()
      .then((data) => {
        const outdatedApps = data
          .filter(app => {
            if (app.state === 'inactive') return false
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
        if (app.store_app && isMinor(app.store_app.version, outdatedApp.version)) {
          const data = {
            version_date: new Date().toISOString()
          }
          ;['admin_settings', 'modules', 'version'].forEach(field => {
            data[field] = app.store_app[field]
          })
          return ecomApps.edit(outdatedApp._id, data)
            .then(resolve)
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
    return
  }
  updateApp(ecomApps, app)
    .catch(console.error)
    .finally(() => {
      if (typeof window.requestIdleCallback === 'function') {
        setTimeout(() => {
          window.requestIdleCallback(() => nextAppUpdate(ecomApps))
        }, 200)
      } else {
        setTimeout(() => nextAppUpdate(ecomApps), 400)
      }
    })
}

const startQueue = (ecomApps, marketApps) => {
  findOutdatedApps(ecomApps, marketApps)
    .then(outDatedApps => {
      queuedApps = outDatedApps
      nextAppUpdate(ecomApps)
    })
    .catch(console.error)
}

export const queueUpdateApps = (ecomApps, marketApps, manualUpdateCallback) => {
  requestManualUpdate = manualUpdateCallback
  if (ecomApps.ecomAuth.checkLogin()) {
    return startQueue(ecomApps, marketApps)
  }
  ecomApps.ecomAuth.on('login', () => startQueue(ecomApps, marketApps))
}
