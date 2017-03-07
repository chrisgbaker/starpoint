import { expect } from 'chai'
import { App } from '../../../src/components/app'

describe('First test', () => {
    it('should pass with flying colors', () => {
        const renderedApp = new App({message:'beer!'}).render();
        expect(renderedApp.props.children).to.equal('beer!');
    })
})