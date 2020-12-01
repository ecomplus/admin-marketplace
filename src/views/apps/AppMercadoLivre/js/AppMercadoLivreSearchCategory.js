import { BModal } from 'bootstrap-vue'
import { findCategory } from '../../../../services/MercadoLivreService'

export default {
  name: 'AppMercadoLivreSearchCategory',
  components: {
    BModal
  },
  data () {
    return {
      term: '',
      categories: []
    }
  },
  methods: {
    search () {
      if (this.term) {
        findCategory(this.term)
          .then(({ data }) => { this.categories = data })
          .catch(error => console.error(error))
      }
    },
    selectCategory (category) {
      this.$emit('selectCategory', category)
      this.term = ''
      this.categories = []
      this.$bvModal.hide('modal-app-ml-search-category')
    }
  }
}
