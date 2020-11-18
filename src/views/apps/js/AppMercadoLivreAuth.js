import { getAuthUrl } from '../../../services/EcomMLAppService'
export default {
  name: 'AppMercadoLivreAuth',

  methods: {
    openSignInWindow () {
      const strWindowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100'
      window.open(getAuthUrl(), '', strWindowFeatures)
    }
  }
}
