import { useState } from 'react';
import { FiUser, FiPlus, FiEdit, FiTrash2, FiDownload } from 'react-icons/fi';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Switch,
} from '@/components/ui';
import { ComprehensiveFormExample } from '@/components/form';
import { ToastExample } from '@/components/ui/Toast/ToastExample';
import { SelectExample } from '@/components/ui/Select/SelectExample';
import RadioButtonExample from '@/components/ui/RadioButton/RadioButtonExample';
import { DropdownExample } from '@/components/ui/Dropdown/DropdownExample';
import CheckboxExample from '@/components/ui/Checkbox/CheckboxExample';
import { TableExample } from '@/components/ui/Table/TableExample';
import { TextExample } from '@/components/ui/TextExample';
import { DatePickerExample } from '@/components/ui/DatePicker/DatePickerExample';
import { SheetExample } from '@/components/ui/Sheet/SheetExample';

export function SandboxPage() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Component Sandbox
        </h1>
        <p className="text-lg text-gray-500">
          A collection of all reusable components used in the HRIS system
        </p>
      </div>

      {/* Buttons Section */}
      <section className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Text Components
            </h2>
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <TextExample />
              </CardContent>
            </Card>
          </div>
        </section>
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Buttons
          </h2>
          <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles and states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Default Buttons */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500">
                  Default Buttons
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="info">Info</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="primary">Primary</Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500">
                  Button Sizes
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* With Icons */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500">
                  Buttons with Icons
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <FiPlus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                  <Button variant="primary">
                    <FiEdit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="danger">
                    <FiTrash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                  <Button variant="info">
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Loading State */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500">
                  Button States
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Form Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Inputs */}
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ComprehensiveFormExample />
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardContent className="space-y-4">
                <SelectExample />
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardContent className="space-y-4">
                <RadioButtonExample />
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardContent className="space-y-4">
                <CheckboxExample />
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Switch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Switch
                  id="notifications"
                  checked={isEnabled}
                  onCheckedChange={setIsEnabled}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Date Picker Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Date Picker Components
          </h2>
          <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Date Pickers</CardTitle>
              <CardDescription>
                Single date, date range, and multiple date selection components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DatePickerExample />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Feedback Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Alerts */}
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ToastExample />
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500">
                    Status Badges
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="primary">Primary</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500">Sizes</h4>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <Badge size="sm">Small</Badge>
                    <Badge size="default">Default</Badge>
                    <Badge size="lg">Large</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Display Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Display Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Avatars */}
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500">Sizes</h4>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500">
                    With Images & Fallbacks
                  </h4>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        <FiUser className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg-success text-success">
                        AB
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Card Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="border border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Simple Card</CardTitle>
                    <CardDescription>
                      A basic card with header and content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Card content goes here
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      Card with Footer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-gray-500">
                      Content with action buttons
                    </p>
                  </CardContent>
                  <CardFooter className="pt-3">
                    <Button size="sm" className="mr-2">
                      Save
                    </Button>
                    <Button size="sm" variant="default">
                      Cancel
                    </Button>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Components */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Navigation Components
          </h2>
          <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Dropdown Menu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Dropdown Components
                  </h4>
                  <DropdownExample />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Sheet Components</h4>
                  <SheetExample />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Display */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Display
          </h2>
          <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Basic Table (shadcn/ui)</CardTitle>
              <CardDescription>Basic table component example</CardDescription>
            </CardHeader>
            <CardContent>
              <TableExample />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Separators */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Layout Components
          </h2>
          <Card className="border border-border/50 bg-card-gradient backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Separators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">Section One</div>
              <Separator />
              <div className="text-sm">Section Two</div>
              <Separator className="my-4" />
              <div className="text-sm">Section Three</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
