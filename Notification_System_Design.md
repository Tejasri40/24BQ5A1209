# Stage 1

## Objective

Build a Priority Inbox that displays the top 10 most important unread notifications.

## Priority Logic

Notifications are ranked using:

1. Notification Type Weight
2. Recency

Weight Assignment:

* Placement = 3
* Result = 2
* Event = 1

Sorting Rule:

1. Higher weight first
2. If weights are equal, newer notification first

Example:

Placement > Result > Event

## Approach

1. Fetch notifications from the provided API.
2. Assign a weight based on notification type.
3. Convert timestamp into milliseconds.
4. Sort notifications by:

   * Weight (Descending)
   * Timestamp (Descending)
5. Select the first 10 notifications.

## Efficient Top 10 Maintenance

Since notifications continuously arrive, maintaining the top 10 by sorting the entire dataset every time is inefficient.

A Min Heap (Priority Queue) of size 10 can be used.

Algorithm:

1. Insert notifications into heap until size reaches 10.
2. Compare every new notification with heap root.
3. If new notification has higher priority:

   * Remove root.
   * Insert new notification.
4. Heap always contains top 10 notifications.

## Complexity

Current Solution:

* Time Complexity: O(N log N)
* Space Complexity: O(N)

Heap-Based Production Solution:

* Time Complexity: O(N log 10)
* Space Complexity: O(10)

## Technologies Used

* Node.js
* Express.js
* Axios

## API Used

GET /evaluation-service/notifications
