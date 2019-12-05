import { DracoDecoder } from '../index';
require('jest');

describe("Decoder Test", () => {
    it("Should correctly load draco decoder module", () => {
        const decoder = new DracoDecoder();
        expect(DracoDecoder.Decoder).not.toBeNull();
    })
})
