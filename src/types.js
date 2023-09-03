const typeLookup = {
    'src': {
        returnType: 'vec4',
        args: ['vec2 _st']
    },
    'coord': {
        returnType: 'vec2',
        args: ['vec2 _st']
    },
    'color': {
        returnType: 'vec4',
        args: ['vec4 _c0']
    },
    'combine': {
        returnType: 'vec4',
        args: ['vec4 _c0', 'vec4 _c1']
    },
    'combineCoord': {
        returnType: 'vec2',
        args: ['vec2 _st', 'vec4 _c0']
    }
}

export default typeLookup;