import FOS from './lib';
export function calc(module, faceWidth, length, rpm, torque, pr, elasticModulus, hardness, Q, Ko, process, material, grade){
    let result = [];
    let graph1 = [];
    let graph2 = [];
    let count1, count2 = 0;
    for(let n1=8;n1<101;n1++) {
        for(let n2=16;n2<251;n2++) {
            let reduction = n2/n1;
            let len = module*(n1 + n2 + 2) + 10; //in mm  
            let fos =  FOS(module, n1, n2, faceWidth, rpm, torque, pr, elasticModulus, hardness, Q, Ko, process, material, grade)
            if(len <= length && fos[0]>=1.45 && fos[1]>=1.45) {
                result.push({module:module, faceWidth:faceWidth, n_pinion:n1, n_gear:n2, reduction:reduction, bending_fos:fos[0], contact_fos:fos[1], length:len, qualityN:Q, overload:Ko});
                graph1.push({name:count1++, length:len, bendingFOS:fos[0], contactFOS:fos[0], N_pinion:n1, N_gear:n2});
                graph2.push({name:count2++, length:len, contactFOS:fos[1], N_pinion:n1, N_gear:n2});
            }
        }
    }
    return [result, graph1, graph2];
}