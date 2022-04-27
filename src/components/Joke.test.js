import renderer from 'react-test-renderer';
import Joke from "./Joke";

describe('Joke Component test.', () => {
    
    it('should match with Snapshot.', () => {
        const mockValue = "Chuck norris mock";
        const component = renderer.create(<Joke value={mockValue} />).toJSON();
        expect(component).toMatchSnapshot();
    });
});