import { css } from 'styled-components';
export function parallelPolygon(){
    let angles = {
        topLeft: '0%',
        topRight: '0%',
        bottomRight: '100%',
        bottomLeft: '100%'
    }    
      
        if (evenNumberOfParams(arguments.length)) {

            for (var i = 0; i < arguments.length; i+=2) {
                if (hasProp(arguments[i], angles)) angles[arguments[i]] = arguments[i + 1];
            }
        }
    
    
    return `
        clip-path: polygon(0 ${angles.topLeft}, 100% ${angles.topRight}, 100% ${angles.bottomRight}, 0% ${angles.bottomLeft});
        shape-outside: polygon(0 ${angles.topLeft}, 100% ${angles.topRight}, 100% ${angles.bottomRight}, 0% ${angles.bottomLeft});
    `;
}
function evenNumberOfParams(count) {
    let f=true
    if (count % 2 != 0 && count != 0) {
        console.error('parallelPolygon requires an even number of arguments');
        f = false;
    }
    return f;
}
function hasProp(prop, obj){
    let f=true;
    if(!obj.hasOwnProperty(prop)){
        console.warn(`${arguments[i]} does not follow naming convention
                use 'topLeft' || 'topRight' || 'bottomRight' || 'bottomLeft'
                `);
        f=false;
    }
    return f;
}
export function mediaQueries(ph= null, tb_p=null, tb_l=null, dk= null, lg_dk=null){
    const mqs = [
        '600px',
        '900px',
        '1200px',
        '1800px'];
    const args = Array.from(arguments);
    
    
    let mq = "";
    if (args[0] != null) mq += `@media (max-width:599px){ ${args[0]}}`; 
    mqs.forEach((m, i)=>{
        const j = i+1;
        console.log(`index=${i} css=${args[j]}`);
        if(args[j]!=null) mq += `@media (min-width:${m}){ ${args[j]}}`;
    });
    
    return css`${mq}`;
}
