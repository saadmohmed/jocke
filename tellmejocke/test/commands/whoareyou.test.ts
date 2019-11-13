import {expect, test} from '@oclif/test'

describe('whoareyou', () => {
  test
    .stdout()
    .command(['whoareyou'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['whoareyou', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
