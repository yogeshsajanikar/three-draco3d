//@flow
import * as THREE from 'three';
import { DracoDecoderModule } from './coder/DracoDecoderModule';
import type { Decoder, MeshType, PointCloudType } from './coder/DracoDecoderModule';

export class DracoDecoder {

    decoder: Decoder;

    constructor() {
        this.decoder = new DracoDecoderModule.createDecoder();
    }

    decodeDracoData(rawBuffer: ArrayBuffer) : ?(MeshType | PointCloudType) {
        let intBuffer = new Int8Array(rawBuffer);
        const buffer = DracoDecoderModule.createDecoderBuffer(intBuffer, intBuffer.length);
        const geometryType = this.decoder.GetEncodedGeometryType(buffer);

        let dracoGeometry = null;
        let status;
        if (geometryType === DracoDecoderModule.TRIANGULAR_MESH) {
            dracoGeometry = DracoDecoderModule.createMesh();
            status = this.decoder.DecodeBufferToMesh(buffer, dracoGeometry);
        } else if (geometryType === DracoDecoderModule.POINT_CLOUD) {
            dracoGeometry = DracoDecoderModule.createPointCloud();
            status = this.decoder.DecodeBufferToPointCloud(buffer, dracoGeometry);
        } else {
            const errorMsg = 'Error: Unknown geometry type.';
            console.error(errorMsg);
        }
        DracoDecoderModule.destroyBuffer(buffer);
        return dracoGeometry;
    }

    decode(buffer: ArrayBuffer) : ?THREE.BufferGeometry {
        return new THREE.BufferGeometry();
    }
    
};