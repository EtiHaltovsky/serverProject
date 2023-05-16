Munkers.prototype.__step5=function(){
    var count=0;

    this.path[count][0]=this.Z0_r;
    this.path[count][1]=this.Z0_c;
    var done=false;

    while(!done){
        var row=this.__find_star_in_col(this.path[count][1]);
        if(row>=0){
            count++;
            this.path[count][0]=row;
            this.path[count][1]=this.path[count-1][1]
        }else{
            done=true;
        }

        if(!done){
            var col=this.__find_prime_in_row(this.path[count][0]);
            count++;
            this.path[count][0]=this.path[count-1][0]
            this.path[count][1]=col;
        }
    }

    this.__convert_path(this.path,count);
    this.__clear_covers();
    this.__erase_primes();
    return 3;
};