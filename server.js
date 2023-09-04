app.post('/suggest-destination', (req, res) => {
  const userPreferences = req.body;

  // Log the incoming request data for debugging
  console.log('Received request with userPreferences:', userPreferences);

  const suggestedDestinations = destinations.filter(destination => {
    return (
      destination.type === userPreferences.type &&
      destination.companions.includes(userPreferences.companions) &&
      destination.activities.includes(userPreferences.activities)
    );
  });

  // Log the intermediate results for debugging
  console.log('Filtered destinations:', suggestedDestinations);

  if (suggestedDestinations.length > 0) {
    const randomIndex = Math.floor(Math.random() * suggestedDestinations.length);
    const suggestedDestination = suggestedDestinations[randomIndex];

    // Log the selected destination for debugging
    console.log('Selected destination:', suggestedDestination);

    res.json(suggestedDestination);
  } else {
    res.status(404).json({ message: 'No matching destinations found' });
  }
});
