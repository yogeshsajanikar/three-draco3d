//@flow

import { DracoDecoder } from '../index';
import { test, expect } from 'jest';

test("Should correctly load draco decoder module", () => {
    const decoder = new DracoDecoder();
    expect(decoder.decoder).toBeNonNull();
})
