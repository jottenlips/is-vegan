import { veganSubstitute } from '../src/modules/veganSubstitute';

test('should NOT be vegan ingredient', () => {
  expect(veganSubstitute('beef')).toEqual(
    expect.objectContaining({
    	"beef":["seitan"]
    })
  );
});

test('should be vegan ingredient', () => {
  expect(veganSubstitute('advocado')).toEqual(
    	"advocado"
  );
});

test('should be empty', () => {
  expect(veganSubstitute('')).toEqual(
    	""
  );
});