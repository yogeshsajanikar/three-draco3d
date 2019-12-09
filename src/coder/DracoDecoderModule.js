// @flow

import { createDecoderModule } from 'draco3d';

export type MeshType = {}
export type PointCloudType = {}

export type DecoderBuffer = {
    Init(buffer: Int8Array, bufferLength: number) : void;
}

export type Decoder = {
    GetEncodedGeometryType(buffer: DecoderBuffer) : number;
    DecodeBufferToMesh(buffer: DecoderBuffer, geometry : MeshType) : any;
    DecodeBufferToPointCloud(buffer: DecoderBuffer, geometry : PointCloudType) : any;
}

export class DracoDecoderModule {
    static Module = createDecoderModule({});
    static TRIANGULAR_MESH = DracoDecoderModule.Module.TRIANGULAR_MESH;
    static POINT_CLOUD = DracoDecoderModule.Module.POINT_CLOUD;

    static createDecoder() : Decoder {
        return new DracoDecoderModule.Module.Decoder();
    }

    static createDecoderBuffer(buffer: Int8Array, bufferLength: number) : DecoderBuffer {
        const decoderBuffer = new DracoDecoderModule.Module.DecoderBuffer();
        decoderBuffer.Init(buffer, bufferLength);
        return decoderBuffer;
    }

    static createMesh() : MeshType {
        return new DracoDecoderModule.Module.Mesh();
    }

    static createPointCloud() : PointCloudType {
        return new DracoDecoderModule.Module.PointCloud();
    }

    static destroyBuffer(buffer: DecoderBuffer) : void {
        DracoDecoderModule.Module.destroy(buffer);
    }

}
