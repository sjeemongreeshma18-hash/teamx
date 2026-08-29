# RideSync Project Rules

## 1. Preserve existing workflows

Any frontend change must keep both the passenger and conductor workflows functional. Do not remove existing search, booking, conductor update, or route functionality.

## 2. Reuse existing search logic

When modifying bus search, reuse existing route and trip helpers such as `busRoute()` and `tripForSearch()` instead of creating duplicate route-matching logic.

## 3. Validate user input

Passenger search must handle missing From/To values, identical stops, invalid stops, and routes with no matching buses using clear inline feedback rather than browser alerts.

## 4. Verify before committing

After changing search functionality, test at least one valid route, one invalid input, one no-result case, and any new feature-specific edge cases before committing.

## 5. Keep fare data consistent

`busesDatabase[].price` represents the full-route fare. Segment fares must be calculated from the travelled portion of the route without modifying the stored full-route price.