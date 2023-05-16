Munkers.prototype.compute = function (cost_matrix, options) {

    options = options || {};
    options.padValue = options.padValue || DEFAULT_PAD_VALUE;

    this.C = this.pad_matrix(cost_mtrix, options.padValue);
    this.n = this.C.length;
    this.original_length=cost_matrix.length;
    this.original_width=cost_matrix[0].length;

    var nfalseArray=[]; // array of n false values
    while(nfalseArray.length<this.n)
    nfalseArray.push(false);
    this.row_covered=nfalseArray.slice();
    this.col_covered=nfalseArray.slice();
    this.Z0_r=0;
    this.Z0_c=0;
    this.path=this.__make_matrix(this.n*2,0);
    this.marked=this.__make_matrix(this.n,0);

    var step=1;

    var steps={
        1:this.__step1,
        2:this.__step2,
        3:this.__step3,
        4:this.__step4,
        5:this.__step5,
        6:this.__step6
    };

    while(true){
        var func=steps[step];
        if(!func) //done
        break;

        step=func.apply(this);
    }

    var results=[];
    for(var i=0;i<this.original_length;++i)
    for(var j=0;j<this.original_width;++j)
    if(this.marked[i][j]==1)
    results.push([i,j]);

    return results;

};