#!/usr/bin/env node

/**
 * React Component Generator for Junior Engineer
 * Generate simple UI component boilerplate
 */

const fs = require('fs');
const path = require('path');

const AXIS_AGENT_PATH = '/Users/yusukekikuta/.openclaw/workspace/Axis_MVP/axis-agent';

/**
 * Generate component file content
 */
function generateComponent(name) {
  return `import React from 'react';

interface ${name}Props {
  // TODO: Define your props
  className?: string;
}

export const ${name}: React.FC<${name}Props> = ({
  className = '',
}) => {
  return (
    <div className={\`
      \${className}
    \`}>
      {/* TODO: Implement your component */}
      <p>Hello from ${name}</p>
    </div>
  );
};
`;
}

/**
 * Generate test file content
 */
function generateTest(name) {
  return `import { render, screen } from '@testing-library/react';
import { ${name} } from '../${name}';

describe('${name}', () => {
  it('renders without crashing', () => {
    render(<${name} />);
    expect(screen.getByText(/Hello from ${name}/i)).toBeInTheDocument();
  });

  // TODO: Add more tests
});
`;
}

/**
 * Generate story file for Storybook (optional)
 */
function generateStory(name) {
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta: Meta<typeof ${name}> = {
  title: 'Components/${name}',
  component: ${name},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {},
};
`;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('❌ Error: Component name required');
    console.log('\nUsage: node create-component.js <ComponentName>');
    console.log('Example: node create-component.js UserAvatar');
    console.log('\nOptions:');
    console.log('  --dir <path>  Custom directory (default: src/components/common)');
    console.log('  --no-test     Skip test file generation');
    process.exit(1);
  }

  const name = args[0];
  const options = {
    dir: args.includes('--dir') ? args[args.indexOf('--dir') + 1] : 'src/components/common',
    noTest: args.includes('--no-test'),
  };

  console.log('🎨 React Component Generator\n');
  console.log('='.repeat(50));
  console.log(`📝 Component Name: ${name}`);
  console.log(`📂 Directory: ${options.dir}`);
  console.log('='.repeat(50) + '\n');

  // Validate component name
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
    console.error('❌ Error: Component name must be PascalCase (e.g., UserAvatar)');
    process.exit(1);
  }

  // Create directory
  const componentDir = path.join(AXIS_AGENT_PATH, options.dir);
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
    console.log('✅ Created directory:', componentDir);
  }

  // Generate component file
  const componentPath = path.join(componentDir, `${name}.tsx`);
  if (fs.existsSync(componentPath)) {
    console.error(`❌ Error: Component already exists: ${componentPath}`);
    process.exit(1);
  }

  fs.writeFileSync(componentPath, generateComponent(name), 'utf-8');
  console.log('✅ Created component:', componentPath);

  // Generate test file
  if (!options.noTest) {
    const testDir = path.join(componentDir, '__tests__');
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    const testPath = path.join(testDir, `${name}.test.tsx`);
    fs.writeFileSync(testPath, generateTest(name), 'utf-8');
    console.log('✅ Created test file:', testPath);
  }

  console.log('\n📋 Next steps:');
  console.log('1. Open the component file and implement your UI');
  console.log('2. Add props and styles');
  console.log('3. Write tests');
  console.log('4. Use the component in your app\n');

  console.log('📖 Example usage:');
  console.log(`
import { ${name} } from './components/common/${name}';

function App() {
  return (
    <${name} />
  );
}
  `);

  console.log('🧪 Run tests:');
  console.log(`npm test -- ${name}.test.tsx\n`);

  console.log('🚀 Happy coding!');
}

if (require.main === module) {
  main();
}

module.exports = { generateComponent, generateTest };
