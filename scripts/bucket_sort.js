function BucketSort() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N + K)";
    document.getElementById("Time_Best").innerText = "Ω(N + K)";

    document.getElementById("Space_Worst").innerText = "O(N + K)";

    c_delay = 0;

    bucket_sort();

    enable_buttons();
}

function bucket_sort() {
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

function insertion_sort(bucket) {
    for (var j = 1; j < bucket.length; j++) {
        div_update(divs[j], bucket[j], "yellow");

        var key = bucket[j];
        var i = j - 1;
        while (i >= 0 && bucket[i] > key) {
            div_update(divs[i], bucket[i], "red");
            div_update(divs[i + 1], bucket[i + 1], "red");

            bucket[i + 1] = bucket[i];

            div_update(divs[i], bucket[i], "red");
            div_update(divs[i + 1], bucket[i + 1], "red");

            div_update(divs[i], bucket[i], "#07b2ab");
            if (i == (j - 1)) {
                div_update(divs[i + 1], bucket[i + 1], "yellow");
            }
            else {
                div_update(divs[i + 1], bucket[i + 1], "#07b2ab");
            }
            i -= 1;
        }
        bucket[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], bucket[t], "green");
        }
    }
    div_update(divs[j - 1], bucket[j - 1], "green");
}
