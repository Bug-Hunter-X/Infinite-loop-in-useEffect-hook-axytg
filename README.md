# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by improper use of the `useEffect` hook.

## Bug Description

The `MyComponent` component uses `useEffect` to increment a counter. However, because the dependency array is empty, the effect runs on every render, causing the counter to update continuously, leading to an infinite rendering loop.

## Solution

The solution involves adding the `count` variable to the dependency array of the useEffect. Now the counter will only update when the count itself updates, effectively breaking the infinite loop.