# GraphQL and caching notes

The UI requests dashboard totals, lesson rows, and parent messages through GraphQL. Apollo Client's normalized cache avoids re-fetching unchanged entities, while explicit `refetchQueries` refresh the visible lists after mutations. Querying only fields the page needs helps avoid over-fetching compared with multiple REST calls.

To validate the claimed payload reduction and latency improvement, record comparable REST and GraphQL requests with identical data, network conditions, and cache states. The resume metrics (14 REST calls to 5 queries, 58% smaller payload, 820ms to 310ms) are claims, not benchmark results produced by this demo. GitHub Copilot is not a runtime dependency; use it as a coding assistant rather than presenting it as part of deployed application behavior.
