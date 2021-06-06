import {handleSubmit} from '../src/client/js/formHandler';

describe("Testing how we hande the submit", () => {
    test("Testing the handle submit function", () => {
        expect(handleSubmit).toBeDefined();
    });
  });