import { DracoDecoderModule } from '../DracoDecoderModule';
require('jest');

describe("Decoder Module Test", () => {
    it("Should correctly load draco decoder module", () => {
        expect(DracoDecoderModule.Module).not.toBeNull();
    });

    it("Should create decoder", () => {
        const decoder = DracoDecoderModule.createDecoder();
        expect(decoder).not.toBeNull();
    });

    it("Should create and destroy decoder buffer", () => {
        const arrayBuffer = new ArrayBuffer(8);
        const intBuffer = new Int8Array(arrayBuffer);
        const decoderBuffer = DracoDecoderModule.createDecoderBuffer(intBuffer, intBuffer.length);
        expect(decoderBuffer).not.toBeNull();
        DracoDecoderModule.destroyBuffer(decoderBuffer);
    });

    it("Should have point cloud and triangular mesh type", () => {
        expect(DracoDecoderModule.TRIANGULAR_MESH).toBe(1);
        expect(DracoDecoderModule.POINT_CLOUD).toBe(0);
    });

    it("Should create mesh and point cloud type", () => {
        expect(DracoDecoderModule.createMesh()).not.toBeNull();
        expect(DracoDecoderModule.createPointCloud()).not.toBeNull();
    })

})
