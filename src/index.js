//@flow

import * as THREE from 'three';
import { createDecoderModule } from 'draco3d';

type Decoder = {
}

type DecoderModule = {
    Decoder: Decoder
}


export class DracoDecoder {

    static decoderModule : DecoderModule = createDecoderModule({});
    static decoder: Decoder = decoderModule.decoder;

    constructor() {
    }

    async decode(buffer: ArrayBuffer) : ?THREE.BufferGeometry {
        
        return new THREE.BufferGeometry();
    }
    
};