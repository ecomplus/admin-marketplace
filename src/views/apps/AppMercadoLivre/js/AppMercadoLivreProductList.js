export default {
  name: 'AppMercadoLivreProducList',
  props: {
    productCorrelations: {}
  },
  methods: {
    getCheckedClass (value) {
      return value ? 'fa fa-check' : 'fa fa-close'
    },
    unlink (value) {
      this.$emit('unlink', value)
    }
  }
}
