

        // // generator 

        // const students_list = [students.textContent, graduated.textContent, inactive_students.textContent]
        // let temp_mem =
        //     [
        //         // {
        //         // name: null,
        //         // id: null,
        //         // tag: null
        //         // }
        //     ]

        // let ctag = null
        // let cgroup = null
        // let cgroupcount = 0
        // const gen = ["1st gen", "2nd gen", "3rd gen", "4th gen"]
        // const group = ["freshman", "graduated", "terminated"]
        // for (k of students_list) {
        //     cgroup = group[cgroupcount]
        //     cgroupcount += 1

        //     for (i of k.split("\n")) {

        //         if (i.toLowerCase() == gen[0]) {
        //             ctag = gen[0]
        //         }
        //         else if (i.toLowerCase() == gen[1]) {
        //             ctag = gen[1]
        //         }
        //         else if (i.toLowerCase() == gen[2]) {
        //             ctag = gen[2]
        //         }
        //         else if (i.toLowerCase() == gen[3]) {
        //             ctag = gen[3]
        //         }

        //         if (i.includes("-")) {
        //             const modified = i.split("-")
        //             temp_mem.push(
        //                 {
        //                     name: modified[0].trim(),
        //                     id: modified[1].trim(),
        //                     status: null,
        //                     tag: cgroup,
        //                     generation: ctag
        //                 }
        //             )
        //         }
        //     }
        // }
        // console.log(JSON.stringify(temp_mem, '', 4))