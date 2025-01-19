function calculateActualTime() {
    const totalDurationInput = document.getElementById('totalDuration').value.trim();
    const reverseTimeInput = document.getElementById('reverseTime').value.trim();

    // Validate inputs
    if (!totalDurationInput || !reverseTimeInput) {
        alert("Please enter both total duration and reverse time.");
        return;
    }

    // Parse total duration
    const totalDurationParts = totalDurationInput.split(':');
    if (totalDurationParts.length !== 2 || isNaN(totalDurationParts[0]) || isNaN(totalDurationParts[1])) {
        alert("Total duration should be in HH:MM format.");
        return;
    }
    const totalDurationMinutes = parseInt(totalDurationParts[0]) * 60 + parseInt(totalDurationParts[1]);

    // Parse reverse time
    const reverseTimeParts = reverseTimeInput.split(':');
    if (reverseTimeParts.length !== 2 || isNaN(reverseTimeParts[0]) || isNaN(reverseTimeParts[1])) {
        alert("Reverse time should be in MM:SS format.");
        return;
    }
    const reverseMinutes = parseInt(reverseTimeParts[0]) * 60 + parseInt(reverseTimeParts[1]);

    // Calculate actual time
    const actualTimeMinutes = totalDurationMinutes - reverseMinutes;

    // Handle negative result (in case of incorrect input)
    if (actualTimeMinutes < 0) {
        alert("Reverse time cannot be greater than total duration.");
        return;
    }

    // Convert back to HH:MM format
    const hours = Math.floor(actualTimeMinutes / 60);
    const minutes = actualTimeMinutes % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    // Display result
    document.getElementById('result').textContent = formattedTime;
}
