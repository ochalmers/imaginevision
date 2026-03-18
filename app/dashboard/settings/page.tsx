import { PageHeader } from '@/components/layout/PageHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import { Section } from '@/components/layout/Section'
import { FormField, FormLabel, FormMessage } from '@/components/ui/FormField'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/common/Button'
import { Switch } from '@/components/ui/Switch'

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Manage your account and preferences" />
      <div className="mt-6 max-w-2xl space-y-6">
        <Section title="Profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField id="name">
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your name" />
                <FormMessage />
              </FormField>
              <FormField id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="you@example.com" />
                <FormMessage />
              </FormField>
              <Button>Save changes</Button>
            </CardContent>
          </Card>
        </Section>
        <Section title="Preferences">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email notifications</p>
                <p className="text-xs text-neutral-500">Receive updates by email</p>
              </div>
              <Switch defaultChecked />
            </CardContent>
          </Card>
        </Section>
      </div>
    </>
  )
}
