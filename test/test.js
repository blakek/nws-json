import test from 'ava'
import nws from '../src/nws-json'

test('is set up correctly', async t => {
  const { status } = await nws.isSetupCorrectly()
  t.is(status, 'OK')
})
