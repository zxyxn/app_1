export interface Enfermedades {
    encabezado: {
        title: string,
        description:string
    },
    pandemias: [{
        pandemia: {
            title: string,
            description: string,
            muertos: string
        }
    }]
}