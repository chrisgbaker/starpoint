import { expect } from 'chai'
import { App } from '../../../src/components/app/index.tsx'

describe('First test', () => {
    it('should pass with flying colors', () => {
        const renderedApp = new App({}).render();
        expect(renderedApp.props.children).to.equal('beer!');
    })
})