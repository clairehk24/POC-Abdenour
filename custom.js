// Apply Filters Button Functionality
document.getElementById('apply-filters').addEventListener('click', function() {
    const selectedFilters = {
        Topic: [],
        CAATEStandard: [],
        Filter3Placeholder: [],
        date: []
    }; 

    document.querySelectorAll('.filter:checked').forEach(function(checkbox) {
        const filterType = checkbox.getAttribute('data-filter');
        selectedFilters[filterType].push(checkbox.value);
    });

    // Filter videos
    document.querySelectorAll('.video-item').forEach(function(video) {
        const videoTopic = video.getAttribute('data-Topic');
        const videoCAATEStandard = video.getAttribute('data-CAATEStandard');
        const videoFilter3Placeholder = video.getAttribute('data-Filter3Placeholder');
        const videoDate = video.getAttribute('data-date');

        const matchesTopic = selectedFilters.Topic.length === 0 || selectedFilters.Topic.includes(videoTopic);
        const matchesCAATEStandard = selectedFilters.CAATEStandard.length === 0 || selectedFilters.CAATEStandard.includes(videoCAATEStandard);
        const matchesFilter3Placeholder = selectedFilters.Filter3Placeholder.length === 0 || selectedFilters.Filter3Placeholder.includes(videoFilter3Placeholder);
        const matchesDate = selectedFilters.date.length === 0 || selectedFilters.date.includes(videoDate);

        if (matchesTopic && matchesCAATEStandard && matchesFilter3Placeholder && matchesDate) {
            video.style.display = 'block';  // Show matching video
        } else {
            video.style.display = 'none';   // Hide non-matching video
        }
    });
});

// Clear Filters Button Functionality
document.getElementById('clear-filters').addEventListener('click', function() {
    document.querySelectorAll('.filter').forEach(function(checkbox) {
        checkbox.checked = false;  // Uncheck all checkboxes
    });

    // Show all videos after clearing filters
    document.querySelectorAll('.video-item').forEach(function(video) {
        video.style.display = 'block';
    });
});
