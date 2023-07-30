import renderer from 'react-test-renderer';
import { Button } from './Button';
it('Classname appends right', async () => {
    const component = renderer.create(<Button type="button">Test</Button>);
    let tree = component.toJSON() as renderer.ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();

    await renderer.act(() => {
        component.update(
            <Button type="button" className="test">
                Test
            </Button>
        );
    });
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    await renderer.act(() => {
        component.update(<Button type="button">Test</Button>);
    });
    // re-rendering
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
});
