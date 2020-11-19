import { BTabs, BTab } from 'bootstrap-vue'
import AppMercadoLivreSearchCategory from '../AppMercadoLivreSearchCategory.vue'

export default {
  name: 'AppMercadoLivreExportation',
  components: {
    BTabs,
    BTab,
    AppMercadoLivreSearchCategory
  },
  data () {
    return {
      productToExport: {},
      listingTypes: [
        {
          id: 'gold_pro',
          name: 'Premium'
        },
        {
          id: 'gold_premium',
          name: 'Diamante'
        },
        {
          id: 'gold_special',
          name: 'Clássico'
        },
        {
          id: 'gold',
          name: 'Ouro'
        },
        {
          id: 'silver',
          name: 'Prata'
        },
        {
          id: 'bronze',
          name: 'Bronze'
        },
        {
          id: 'free',
          name: 'Grátis'
        }
      ]
    }
  },
  methods: {
    add () {
      this.$emit('add', Object.assign({}, this.productToExport))
      this.productToExport = {}
    },
    selectCategory (category) {
      this.$set(this.productToExport, 'category_id', category.category_id)
    }
  }
}
