Starting Challenge: 


Challenge / Exercise

1. Add five new (dummy) page components (content can be simple `<h1></h1>`  elements)
    - Home
    - Events
    - EventDetailPage
    - NewEventPage
    - EditEvent
2. Add routing & route definitions for these five pages
    - / => Home
    - /events => Events
    - /events/<some-id> => EventDetailPage
    - /events/new => NewEventPage
    - /events/<some-id>/edit => EditEvent
3. Add a root layout that adds the `<MainNavigation>` component above all page components
4. Add properly working links to the MainNavigation
5. Ensure that the links in MainNavigation receive an "active" class when active
6. Output a list of dummy events to the Events
   Every list item should include a link to the respective EventDetailPage
7. Output the ID of the selected event on the EventDetailPage
   BONUS: Add another (nested) layout route that adds the `<MainNavigation>` component above all /events... page components