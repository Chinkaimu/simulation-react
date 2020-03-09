import Redact from './redact4-reconciliation'

const element = Redact.createElement(
  'div',
  { id: 'foo' },
  Redact.createElement("a", null, 'bar'),
  Redact.createElement("b")
)
const container = document.getElementById('root')
Redact.render(element, container)