import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { InputFormField, SelectFormField, SwitchFormField, TextAreaFormField } from "@/customComponents/FormFields";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import IconifyIcon from "@/customComponents/IconifyIcon";


type AddPaymentMethodProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const newEventSchema = z.object({

});

export default function NewEventSlider({ open, onOpenChange }: AddPaymentMethodProps) {
    const form = useForm<z.infer<typeof newEventSchema>>({
        resolver: zodResolver(newEventSchema),
        mode: 'onChange',
        defaultValues: {
        },
    });

    return (
        <Sheet modal={true} open={open} onOpenChange={onOpenChange}>
            <SheetContent className="flex flex-col justify-between h-full">
                <SheetHeader>
                    <SheetTitle>New Event</SheetTitle>
                    <SheetDescription>
                        Add all the events that you expect to happen within this
                    </SheetDescription>
                </SheetHeader>
                <Form {...form}>
                    <form action="" className="flex flex-col flex-1 max-h-[80vh] overflow-y-auto">
                        <div className="grid flex-1 auto-rows-min gap-4 px-4">
                            <div className="isActive flex justify-end">
                                {/* isActive */}
                                <SwitchFormField form={form} name='isPaid' label="Paid Event" className="" />
                            </div>

                            {/* Inoculation or Weighing Form */}
                            <div className="imageSelection ">
                                <label htmlFor='productImages' className=' flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[error=true]:text-destructive'>Event Banner <span className='text-red-500'>*</span></label>
                                <div className="selectionContainer bg-[#F7F9FF] h-[100px] border border-dashed mt-2 rounded flex flex-col items-center justify-center gap-2">
                                    {/* image icon */}
                                    <IconifyIcon icon='mage:image-upload' fontSize={40} className='text-lg text-blue-600' />
                                    <div className="textSection text-center">
                                        <p className='text-sm'> <label className='text-blue-600' htmlFor='productImages'>Click here</label> to upload or drag and drop</p>
                                        <p className='text-xs'>Maximum file size 2MB</p>
                                        <input type='file' className='hidden' id='productImages' />
                                    </div>
                                </div>
                            </div>
                            {/* event name */}
                            <InputFormField form={form} name="eventName" label="Event Name" placeholder="Enter event name..." />
                            {/* description */}
                            <TextAreaFormField form={form} name="type" label="Event Description" placeholder="Enter event Description..." />
                            {/* event Date and time */}
                            <div className="eventDateNTimes grid grid-cols-2 space-y-2 gap-x-4">
                                <div className="eventDate col-span-2">
                                    <InputFormField form={form} name="eventDate" label="Event Date" />
                                </div>
                                <InputFormField form={form} name={"startTime"} label="Start Time" type="time" />
                                <InputFormField form={form} name={"endTime"} label="End Time" type="time" />
                            </div>
                            {/* event type */}
                            <SelectFormField form={form} name="eventType" label="Event type" placeholder="" options={[{ label: 'In Person', value: 'In Person' }, { label: 'Online', value: 'Online' }, { label: 'Hybrid', value: 'Hybrid' }]} />
                            {/* Event Address */}
                            <InputFormField form={form} name="address" label="Event Address" placeholder="Enter event address..." />
                            {/* event url */}
                            <InputFormField form={form} name="eventURl" label="Online URL" type="text" placeholder="Enter Meeting url..." />
                            {/* amount */}
                            <InputFormField form={form} name="amount" label="Amount" placeholder="Enter amount..." type="number" />

                            <div className="isActive">
                                <p className="text-gray-500 italic">Switch if the participants of this event will be graded or not.</p>
                                {/* isActive */}
                                <SwitchFormField form={form} name='isGraded' label="" />
                            </div>
                        </div>
                    </form>
                </Form>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
