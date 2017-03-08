import { expect } from 'chai'
import TestComponent from '../../../src/components/test-component'

describe('First test', () => {
    it('should pass with flying colors', () => {
        const renderedApp = new TestComponent({message:'beer!'}).render();
        expect(renderedApp.props.children).to.equal('beer!');
    })
})
