function calculateAttendance() {
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    
    if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0) {
        alert("Please enter valid numbers for total and attended classes.");
        return;
    }

    const attendancePercentage = (attendedClasses / totalClasses) * 100;
    document.getElementById('attendanceResult').innerText = `Attendance Percentage: ${attendancePercentage.toFixed(2)}%`;
}

function calculateClassesNeeded() {
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    const targetAttendance = parseFloat(document.getElementById('targetAttendance').value);
    
    if (isNaN(totalClasses) || isNaN(attendedClasses) || isNaN(targetAttendance) || totalClasses <= 0 || targetAttendance <= 0 || targetAttendance > 100) {
        alert("Please enter valid numbers for total classes, attended classes, and target attendance.");
        return;
    }

    const currentAttendancePercentage = (attendedClasses / totalClasses) * 100;
    
    if (currentAttendancePercentage >= targetAttendance) {
        document.getElementById('classesNeededResult').innerText = "You have already reached or exceeded your target attendance.";
        return;
    }

    let additionalClasses = 0;
    let newTotalClasses = totalClasses;
    let newAttendedClasses = attendedClasses;

    while ((newAttendedClasses / newTotalClasses) * 100 < targetAttendance) {
        additionalClasses++;
        newTotalClasses++;
        newAttendedClasses++;
    }

    document.getElementById('classesNeededResult').innerText = `You need to attend ${additionalClasses} more class(es) to reach your target attendance of ${targetAttendance}%`;
}

function calculateBunkableClasses() {
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    const targetAttendance = parseFloat(document.getElementById('targetAttendance').value);
    
    if (isNaN(totalClasses) || isNaN(attendedClasses) || isNaN(targetAttendance) || totalClasses <= 0 || targetAttendance <= 0 || targetAttendance > 100) {
        alert("Please enter valid numbers for total classes, attended classes, and target attendance.");
        return;
    }

    let bunkableClasses = 0;
    let newTotalClasses = totalClasses;
    let newAttendedClasses = attendedClasses;

    while ((newAttendedClasses / (newTotalClasses + bunkableClasses + 1)) * 100 >= targetAttendance) {
        bunkableClasses++;
    }

    document.getElementById('bunkableClassesResult').innerText = `You can bunk ${bunkableClasses} more class(es) and still maintain your target attendance of ${targetAttendance}%`;
}