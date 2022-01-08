const solve_btn = document.getElementById("mbtn");
let b = new Array(9);
for (let i = 0; i < b.length; i++) {
    b[i] = new Array(9);
}

let ppp = 1;

function isValid(r,c,t){

    for (let i = 0; i < 9; i++) {
        if (b[i][c]==t) {
            return false;
        }

        if(b[r][i]==t){
            return false;
        }
    }


    let m = 3* parseInt(r/3);
    let n = 3*parseInt(c/3);

    for (let i = m; i < (m +3) ; i++) 
    {
        for (let j = n; j < (n+3); j++) {
            if (b[i][j]==t) {
                return false;
            }
        }
    }
    return true;
}


function solveAct(){
    ppp++;
    for (var i = 0; i < 9; i++) {

        for (var j = 0; j < 9; j++) {

            if(b[i][j]==='.'){
                for (let k = '1'; k <= '9'; k++) {
                    if (isValid(i,j,k)===true) {
                        b[i][j] = k;
                        if(solveAct()===true){
                            return true;
                        }else {
                            b[i][j] = '.';
                        }

                    }
                }
                return false;
            }            
        }
    }
    return true;
}






function alrt(){
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            let k = "r" +i+"c"+j;
            b[i][j] = document.getElementById(k).value;
            if ( b[i][j].length===0) {
                b[i][j] = '.';
            }else if (b[i][j].length===1) {
                if(b[i][j]==='0'){
                    return "invalid input";
                }
                b[i][j] = b[i][j];
            }else {
                return "invalid input";
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (b[i][j]!='.') {
                let p = b[i][j];
                b[i][j] = '.';
                if (isValid(i,j,p)===false) {
                    return "invalid input";
                }
                b[i][j] = p;
            }
        }
    }
    return "valid input";
}

function solve(){
    let k = alrt();
    let p  = "output";
    const op = document.getElementById("op");
    if(k=="invalid input"){
        op.style.display = "block";
        op.innerHTML = k;
    }else {
        let pp = solveAct();        
    }
        for (let i = 0; i < b.length; i++) {
            for (let j = 0; j < b[0].length; j++) {
                let k = "opr" +i+"c"+j;
                document.getElementById(k).innerHTML = b[i][j];
            }
        }
    

}

solve_btn.addEventListener('click',solve);




