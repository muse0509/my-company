#!/usr/bin/env node

/**
 * React Context Generator
 * Generate boilerplate for React Context + Custom Hook
 */

const fs = require('fs');
const path = require('path');

const AXIS_AGENT_PATH = '/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent';

/**
 * Generate Context file content
 */
function generateContext(name) {
  const contextName = name.endsWith('Context') ? name : `${name}Context`;
  const stateName = name.replace(/Context$/, 'State');
  const hookName = `use${name.replace(/Context$/, '')}`;

  return `import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// Define state interface
interface ${stateName} {
  // TODO: Define your state properties
  loading: boolean;
  data: any | null;
  error: Error | null;
}

// Define context type
interface ${contextName}Type {
  state: ${stateName};
  // TODO: Define your methods
  update: (data: any) => void;
  reset: () => void;
}

// Create context
const ${contextName} = createContext<${contextName}Type | undefined>(undefined);

// Provider component
export const ${name.replace(/Context$/, '')}Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<${stateName}>({
    loading: false,
    data: null,
    error: null,
  });

  const update = useCallback((data: any) => {
    setState(prev => ({
      ...prev,
      data,
      loading: false,
      error: null,
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      loading: false,
      data: null,
      error: null,
    });
  }, []);

  return (
    <${contextName}.Provider value={{ state, update, reset }}>
      {children}
    </${contextName}.Provider>
  );
};

// Custom hook
export const ${hookName} = (): ${contextName}Type => {
  const context = useContext(${contextName});
  if (!context) {
    throw new Error('${hookName} must be used within ${name.replace(/Context$/, '')}Provider');
  }
  return context;
};
`;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('❌ Error: Context name required');
    console.log('\nUsage: node create-context.js <ContextName>');
    console.log('Example: node create-context.js WalletState');
    process.exit(1);
  }

  const name = args[0];
  const contextName = name.endsWith('Context') ? name : `${name}Context`;
  const fileName = `${contextName}.tsx`;
  const filePath = path.join(AXIS_AGENT_PATH, 'src', 'context', fileName);

  console.log('🎨 React Context Generator\n');
  console.log('='.repeat(50));
  console.log(`📝 Context Name: ${contextName}`);
  console.log(`📂 Output Path: ${filePath}`);
  console.log('='.repeat(50) + '\n');

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`❌ Error: File already exists: ${filePath}`);
    console.log('\nPlease choose a different name or delete the existing file.');
    process.exit(1);
  }

  // Ensure context directory exists
  const contextDir = path.join(AXIS_AGENT_PATH, 'src', 'context');
  if (!fs.existsSync(contextDir)) {
    fs.mkdirSync(contextDir, { recursive: true });
    console.log('✅ Created context directory');
  }

  // Generate and write file
  const content = generateContext(name);
  fs.writeFileSync(filePath, content, 'utf-8');

  console.log('✅ Context file generated successfully!\n');
  console.log('📋 Next steps:');
  console.log('1. Edit the generated file to add your state properties');
  console.log('2. Implement your business logic');
  console.log('3. Add the Provider to your app (src/Providers.tsx)');
  console.log('4. Use the custom hook in your components\n');

  console.log('📖 Example usage:');
  console.log(`
import { ${name.replace(/Context$/, '')}Provider, use${name.replace(/Context$/, '')} } from './context/${contextName}';

// In your app
<${name.replace(/Context$/, '')}Provider>
  <YourComponent />
</${name.replace(/Context$/, '')}Provider>

// In your component
const { state, update, reset } = use${name.replace(/Context$/, '')}();
  `);

  console.log('🚀 Happy coding!');
}

if (require.main === module) {
  main();
}

module.exports = { generateContext };
