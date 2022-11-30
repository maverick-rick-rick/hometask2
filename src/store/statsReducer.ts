import {defaultState} from './notesReducer'


export const statsState = {
    state : []
}

export const statsReducer = (state = statsState, action : {type: string}) => {
    let dataList:string[][] = [];
    for (const [key, value] of Object.entries(defaultState)) {
        const tempArray:string[] = [];
        value.forEach(element => {
            tempArray.push(element.content.category);
        });
       dataList.push(tempArray);
    }
    const categoriesList:string[] = Array.from(new Set(dataList.flat()));

    function compileStatsArray(etalon:string[], comparing:string[][]){
        const result:{ content: string[]; }[] = [];
       etalon.forEach(element => {

        const a = comparing[0].filter(word=>word === element).length;
        const b = comparing[1].filter(word=>word === element).length;


        result.push({content: [element, a.toString(), b.toString()]});
       });
       
       
       return result;
    }

    const calculatedState = compileStatsArray(categoriesList, dataList)
    

    switch (action.type) {
        // case 'CALCULATE_STATS':
        default:
            return {...state, state: calculatedState};
    }
}


