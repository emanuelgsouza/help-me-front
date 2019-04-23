export default {
  functional: true,
  render (h, context) {
    return h('div', {
      class: ['col-xs-12 col-sm-6 col-md-6']
    }, [
      context.slots().default
    ])
  }
}
