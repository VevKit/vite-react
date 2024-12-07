## Menu

### Usage

```tsx
<Menu label="File">
  <MenuGroup label="Actions">
    <MenuItem icon="📄" label="New File" shortcut="⌘N" onClick={() => console.log('New')} />
    <MenuItem icon="📁" label="Open" shortcut="⌘O" onClick={() => console.log('Open')} />
  </MenuGroup>
  <MenuGroup label="Recent">
    <MenuItem label="document.txt" onClick={() => console.log('Open recent')} />
  </MenuGroup>
  <MenuItem icon="🗑️" label="Delete" destructive onClick={() => console.log('Delete')} />
</Menu>
```
