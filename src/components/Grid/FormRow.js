export default {
  functional: true,
  render (h, context) {
    return h('div', {
      class: ['row q-col-gutter-md']
    }, [
      context.slots().default
    ])
  }
}
