function BucketSort()
{
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N + K)";
    document.getElementById("Time_Best").innerText="Ω(N + K)";

    document.getElementById("Space_Worst").innerText="O(N + K)";

    c_delay=0;

    bucket_sort();

    enable_buttons();
}

function bucket_sort()
{
    var buckets = new Array(array_size);
    for (var i = 0; i < array_size; i++) {
        buckets[i] = [];
    }

    for (var i = 0; i < array_size; i++) {
        var idx_buck = Math.floor((array_size - 1) * div_sizes[i] / inp_as.max);
        buckets[idx_buck].push(div_sizes[i]);
        div_update(divs[i], div_sizes[i], "lightgreen"); 
    }

    for (var i = 0; i < array_size; i++) {
        insertion_sort(buckets[i]);
    }

    var k = 0;
    for (var i = 0; i < array_size; i++) {
        for (var j = 0; j < buckets[i].length; j++) {
            div_sizes[k++] = buckets[i][j];
            div_update(divs[k - 1], div_sizes[k - 1], "green"); 
        }
    }
}

function insertion_sort(bucket)
{
    for (var i = 1; i < bucket.length; i++) {
        var key = bucket[i];
        var j = i - 1;
        while (j >= 0 && bucket[j] > key) {
            bucket[j + 1] = bucket[j];
            div_update(divs[j], bucket[j], "red"); 
            j--;
        }
        bucket[j + 1] = key;
        div_update(divs[j + 1], key, "green");
    }
}