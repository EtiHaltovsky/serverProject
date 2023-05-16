
function make_cost_matrix(profit_matrix, inversion_function) {
    var i, j;
    if (!inversion_function) {
        var maximum = -1.0 / 0.0;
        for (i = 0; i < profit_matrix.length; i++)
            for (j = 0; j < profit_matrix[i].length; j++)
                if (profit_matrix[i][j] > maximum)
                    maximum = profit_matrix[i][j];

        inversion_function = function (x) { return maximum - x; }
    }

    var cost_matrix = [];

    for (i = 0; i < profit_matrix.length; ++i) {
        var row = profit_matrix[i];
        cost_matrix[i] = [];

        for (j = 0; j < row.length; ++j)
            cost_matrix[i][j] = inversion_function(profit_matrix[i][j])
    }

    return cost_matrix;
}