import { Button, Card, CardBody, Input, Typography } from "@material-tailwind/react";
import QRCode from "qrcode";
import { useState } from "react";

const OldItemRegistration = () => {

    const [showQR, setShowQR] = useState();

    const generateQR = async (text = 'hello qr') => {
        // try {
        //     let qr = QRCode.toDataURL('hello');
        //   console.log(qr)
        // } catch (err) {
        //   console.error(err)
        // }
        QRCode.toCanvas('text', { errorCorrectionLevel: 'H' }, function (err, canvas) {
            if (err) throw err
          
            var container = document.getElementById('qr-section');
            var newCanvas = document.createElement('canvas');

            var oldCanvas = container.querySelector('canvas');
            if (oldCanvas) {
                container.replaceChild(newCanvas, oldCanvas);
            } else {
                container.appendChild(newCanvas);
            }
          })

          setShowQR(true)
      }
    
    return (
        <>
        <div className="mt-12 mb-8 flex flex-row justify-around gap-6 ">
            <Card className="w-3/4 p-2">
                <CardBody className="px-0 pt-0 pb-2">
                    <form className="mt-8 mb-2 mx-auto max-w-screen-lg">
                        <div className="mb-1 px-3 sm:px-1 grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-7">
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Product Code
                                </Typography>
                                <Input
                                variant="standard"
                                placeholder="12345678"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Product Description
                                </Typography>
                                <Input
                                variant="standard"
                                placeholder="description"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Serial No
                                </Typography>
                                <Input
                                variant="standard"
                                placeholder="12345678"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                PO No
                                </Typography>
                                <Input
                                type="text"
                                variant="standard"
                                placeholder="000000"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                           </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Warranty Start Date
                                </Typography>
                                <Input
                                variant="standard"
                                type="date"
                                placeholder=""
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                />
                            </div>
                            <div>
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Warranty Periods
                                    </Typography>
                                    <Input
                                    type="number"
                                    variant="standard"
                                    placeholder="12"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                           </div>
                        </div>
                        <div className="flex mt-3 justify-end">
                            <Button onClick={generateQR} fullWidth={false} >
                                Generate QR
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
            <Card className={showQR ? 'block' : 'hidden'}>
                <CardBody>
                    <div id="qr-section"></div>
                </CardBody>
            </Card>
        </div>
        </>
    )
}

export default OldItemRegistration;

// BC
// PO NO
// Warranty
// Start date + Period(M)
// Calculate E-date
// Generate QR & Print