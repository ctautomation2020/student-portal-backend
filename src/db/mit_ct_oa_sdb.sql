-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2021 at 07:08 AM
-- Server version: 8.0.22
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mit_ct_oa_sdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `credentials`
--

CREATE TABLE `credentials` (
  `Credentials_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `credentials`
--

INSERT INTO `credentials` (`Credentials_ID`, `Register_No`, `Username`, `Password`) VALUES
(1, 2018503557, 'admin', '$2b$08$U0VES/hQqaNBzeM90mijUuzEEd.8alRIq9nRZJbF54KCLL4ljSxG.'),
(2, 2018503556, 'user2', '$2b$08$OzucEPKeSZbyPAnQA9vyh.GlVb4HgsBzeEzM638VwzshSSrwqTHD.');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `Person_ID` int NOT NULL,
  `Prefix_Ref` int DEFAULT NULL,
  `First_Name` varchar(50) DEFAULT NULL,
  `Last_Name` varchar(50) DEFAULT NULL,
  `Gender_Ref` int DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Community_Ref` int DEFAULT NULL,
  `Caste` varchar(50) DEFAULT NULL,
  `Primary_MailID` varchar(50) DEFAULT NULL,
  `Secondary_MailID` varchar(50) DEFAULT NULL,
  `Aadhar_Card` bigint DEFAULT NULL,
  `PAN_Card` varchar(10) DEFAULT NULL,
  `Passport_Number` varchar(10) DEFAULT NULL,
  `Primary_ContactNumber` varchar(15) DEFAULT NULL,
  `Secondary_ContactNumber` varchar(15) DEFAULT NULL,
  `Intercom_Number` varchar(5) DEFAULT NULL,
  `Alias_Name` varchar(5) DEFAULT NULL,
  `Address_Line1` varchar(250) DEFAULT NULL,
  `Address_Line2` varchar(250) DEFAULT NULL,
  `Address_Line3` varchar(45) DEFAULT NULL,
  `Address_Line4` varchar(45) DEFAULT NULL,
  `Photo` blob,
  `Marital_Status_Ref` int DEFAULT NULL,
  `Room_Num` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`Person_ID`, `Prefix_Ref`, `First_Name`, `Last_Name`, `Gender_Ref`, `DOB`, `Community_Ref`, `Caste`, `Primary_MailID`, `Secondary_MailID`, `Aadhar_Card`, `PAN_Card`, `Passport_Number`, `Primary_ContactNumber`, `Secondary_ContactNumber`, `Intercom_Number`, `Alias_Name`, `Address_Line1`, `Address_Line2`, `Address_Line3`, `Address_Line4`, `Photo`, `Marital_Status_Ref`, `Room_Num`) VALUES
(123, 3, 'Dhanalakshmi', 'Sangili Sabapathy', 64, '1990-11-11', 6, '308 Nagaram', 'dhanalaxmibtechh@gmail.com', 'secondary@gmail.com', 123412341234, '12341233', '123456788', '9985596879', '8896857688', '123', 'Dhana', '21st Street', 'Nanganallur', 'Chennai', '600061', NULL, 65, '1033'),
(710, 1, 'Vijay', 'K', 63, '2000-08-31', 8, 'caste', 'vijayk31@gmail.com', 'professor@annauniv.edu', 123412341234, '12365478', '12354', '7098566258', '7098526852', '1234', 'k', 'Address 1', 'Address no 2', 'Address no 3', 'Address no 4', NULL, 66, '5201'),
(711, 3, 'Surya', 'S', 63, '1970-12-07', 6, 'no caste', 'surya@annauniv.edu', 'surya712@gmail.com', 789478947894, '789456123', '78945', '8220864895', '9944485673', '04175', 'jai', '101 b/4', 'new car street', 'chromepet', 'chennai', NULL, 65, '1002'),
(712, 2, 'Anandhi', 'Ravi', 64, '1965-12-07', 10, NULL, 'anandhiravi@gmail.com', 'anandhi@annauniv.edu', 456145614561, '456123', '4589', '998862458', '7068525124', '04498', 'anam', '5/45', '8th street ', 'ABC appartment,Guindy', 'Chennai-25', NULL, 65, '7854');

-- --------------------------------------------------------

--
-- Table structure for table `person_guestlecture`
--

CREATE TABLE `person_guestlecture` (
  `GuestLecture_ID` int NOT NULL,
  `Person_ID` int NOT NULL,
  `Level_Ref` int DEFAULT NULL,
  `Topic` varchar(100) DEFAULT NULL,
  `Programme` varchar(100) DEFAULT NULL,
  `Organization` varchar(100) DEFAULT NULL,
  `Place` varchar(20) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person_reference_table`
--

CREATE TABLE `person_reference_table` (
  `Reference_ID` int NOT NULL,
  `Ref_Code` int DEFAULT NULL,
  `Category` varchar(25) DEFAULT NULL,
  `Ref_Name` varchar(100) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `person_reference_table`
--

INSERT INTO `person_reference_table` (`Reference_ID`, `Ref_Code`, `Category`, `Ref_Name`, `Description`) VALUES
(1, 1, 'Prefix', 'Mr.', NULL),
(2, 2, 'Prefix', 'Mrs.', NULL),
(3, 3, 'Prefix', 'Dr.', NULL),
(4, 4, 'Prefix', 'Ms.', NULL),
(5, 5, 'Community', 'Backward Classes Muslims', NULL),
(6, 6, 'Community', 'Scheduled Tribes', NULL),
(7, 7, 'Community', 'Scheduled Castes', NULL),
(8, 8, 'Community', 'Most Backward Classes', NULL),
(9, 9, 'Community', 'Backward Classes', NULL),
(10, 10, 'Community', 'Denotified Communities', NULL),
(11, 11, 'Community', 'Others', NULL),
(12, 12, 'Qualification_Level', 'Under Graduate', NULL),
(13, 13, 'Qualification_Level', 'Post Graduate', NULL),
(14, 14, 'Qualification_Level', 'Doctorate', NULL),
(15, 15, 'Degree', 'B.C.A', NULL),
(16, 16, 'Degree', 'B.E.', NULL),
(17, 17, 'Degree', 'B.Sc.', NULL),
(18, 18, 'Degree', 'B.Tech.', NULL),
(19, 19, 'Degree', 'M.C.A', NULL),
(20, 20, 'Degree', 'M.E.', NULL),
(21, 21, 'Degree', 'M.Tech.', NULL),
(22, 22, 'Degree', 'M.Sc.', NULL),
(23, 23, 'Degree', 'M.S.', NULL),
(24, 24, 'Degree', 'Ph.D.', NULL),
(25, 25, 'Degree', 'Postdoctoral Research', NULL),
(26, 26, 'Branch', 'Computer Science and Engineering', NULL),
(27, 27, 'Branch', 'Computer Science', NULL),
(28, 28, 'Branch', 'Electrical and Electronics Engineering', NULL),
(29, 29, 'Branch', 'Electronics and Communication Engineering', NULL),
(30, 30, 'Branch', 'Electronics and Instrumentation Engineering', NULL),
(31, 31, 'Branch', 'Information Technology', NULL),
(32, 32, 'Branch', 'Others', NULL),
(33, 33, 'Class_Obtained', 'Honors', NULL),
(34, 34, 'Class_Obtained', 'First Class with Distinction', NULL),
(35, 35, 'Class_Obtained', 'First Class', NULL),
(36, 36, 'Class_Obtained', 'Second Class', NULL),
(37, 37, 'Class_Obtained', 'Others', NULL),
(38, 38, 'Designation', 'Professor', NULL),
(39, 39, 'Designation', 'Associate Professor', NULL),
(40, 40, 'Designation', 'Assistant Professor Sr. Grade', NULL),
(41, 41, 'Designation', 'Assistant Professor Sl. Grade', NULL),
(42, 42, 'Designation', 'Assistant Professor Or. Grade', NULL),
(43, 43, 'Designation', 'Teaching Fellow', NULL),
(44, 44, 'Designation', 'Lecturer', NULL),
(45, 45, 'Emp_Category', 'Permanent', NULL),
(46, 46, 'Emp_Category', 'Temporary', NULL),
(47, 47, 'Work Nature', 'Industry', NULL),
(48, 48, 'Work Nature', 'Academics/Research', NULL),
(49, 49, 'Level', 'International', NULL),
(50, 50, 'Level', 'National', NULL),
(51, 51, 'Level', 'State', NULL),
(52, 52, 'Event_Type', 'Conference', NULL),
(53, 53, 'Event_Type', 'Seminar', NULL),
(54, 54, 'Event_Type', 'Workshop', NULL),
(55, 55, 'Event_Type', 'Guest_Lecture', NULL),
(56, 56, 'Event_Type', 'Short Course', NULL),
(57, 57, 'Project_Type', 'Research', NULL),
(58, 58, 'Project_Type', 'Infra Structure', NULL),
(59, 59, 'Project_Type', 'Consultancy', NULL),
(60, 60, 'Guide_Type', 'Supervisor', NULL),
(61, 61, 'Guide_Type', 'Joint Supervisor', NULL),
(62, 62, 'Status', 'Completed', NULL),
(63, 63, 'Status', 'Ongoing', NULL),
(64, 64, 'Patent_Status', 'Filed', NULL),
(65, 65, 'Patent_Status', 'Awarded', NULL),
(66, 66, 'Gender', 'Male', NULL),
(67, 67, 'Gender', 'Female', NULL),
(68, 68, 'Marital_Status', 'Married', NULL),
(69, 69, 'Marital_Status', 'Unmarried', NULL),
(70, 70, 'Marital_Status', 'Widow/Widower', NULL),
(71, 71, 'Participation_Status', 'Presented', NULL),
(72, 72, 'Participation_Status', 'Attended', NULL),
(73, 73, 'Publication_Type', 'Poster', NULL),
(74, 74, 'Publication_Type', 'Conference', NULL),
(75, 75, 'Publication_Type', 'Journal', NULL),
(76, 76, 'Class_Type', 'Theory', NULL),
(77, 77, 'Class_Type', 'Laboratory', NULL),
(78, 78, 'Class_Type', 'Project', NULL),
(79, 79, 'Class_Type', 'Theory cum Practical Integrated', NULL),
(80, 80, 'Responsibility_Ref', 'FA', NULL),
(81, 81, 'Responsibility_Ref', 'Library Incharge', NULL),
(82, 82, 'Responsibility_Ref', 'PI of proposal', NULL),
(83, 83, 'Responsibility_Ref', 'Project Coordinator', NULL),
(84, 84, 'Membership_Type', 'Member', NULL),
(85, 85, 'Membership_Type', 'Senior', NULL),
(86, 86, 'Option', 'Yes', NULL),
(87, 87, 'Option', 'No', NULL),
(88, 88, 'Registration_Mode', 'Full Time', NULL),
(89, 89, 'Registration_Mode', 'Part Time', NULL),
(90, 90, 'Admission_Category', 'Counselling', NULL),
(91, 91, 'Admission_Category', 'Sports', NULL),
(92, 92, 'Admission_Category', 'Industrial Consortium', NULL),
(93, 93, 'Admission_Category', 'Founders Quota', NULL),
(94, 94, 'Admission_Category', 'NRI', NULL),
(95, 95, 'Admission_Category', 'Others', NULL),
(96, 96, 'Residential_Type', 'Hostel', NULL),
(97, 97, 'Residential_Type', 'Day Scholar', NULL),
(98, 98, 'Residential_Type', 'PG Accomodation', NULL),
(99, 99, 'Programme', 'B.E.', NULL),
(100, 100, 'Programme', 'M.E.', NULL),
(101, 101, 'Programme', 'Ph.D.', NULL),
(102, 102, 'Placement_Type', 'On-Campus', NULL),
(103, 103, 'Placement_Type', 'Off-Campus', NULL),
(104, 104, 'Admission_Mode', 'GRE', NULL),
(105, 105, 'Admission_Mode', 'TOEFEL', NULL),
(106, 106, 'Admission_Mode', 'IELTS', NULL),
(107, 107, 'Admission_Mode', 'GMAT', NULL),
(108, 108, 'Admission_Mode', 'GATE', NULL),
(109, 109, 'Admission_Mode', 'TANCET', NULL),
(110, 110, 'Admission_Mode', 'Direct', NULL),
(111, 111, 'Admission_Mode', 'Others', NULL),
(112, 112, 'Award_Type', 'Technical', NULL),
(113, 113, 'Award_Type', 'Non-Technical', NULL),
(114, 114, 'Award_Category', 'State', NULL),
(115, 115, 'Award_Category', 'National', NULL),
(116, 116, 'Award_Category', 'International', NULL),
(117, 117, 'Selection_Mode', 'CUIC', NULL),
(118, 118, 'Selection_Mode', 'Direct', NULL),
(119, 119, 'Participation_Type', 'Individual', NULL),
(120, 120, 'Participation_Type', 'Group', NULL),
(121, 121, 'Blood_Group', 'O+VE', NULL),
(122, 122, 'Blood_Group', 'A+VE', NULL),
(123, 123, 'Blood_Group', 'A-VE', NULL),
(124, 124, 'Blood_Group', 'AB-VE', NULL),
(125, 125, 'Blood_Group', 'O-VE', NULL),
(126, 126, 'Blood_Group', 'B+VE', NULL),
(127, 127, 'Blood_Group', 'B-VE', NULL),
(128, 128, 'Blood_Group', 'AB+VE', NULL),
(129, 129, 'NSS/NSO/YRC_Volunteer', 'NSS', NULL),
(130, 130, 'NSS/NSO/YRC_Volunteer', 'NSO', NULL),
(131, 131, 'NSS/NSO/YRC_Volunteer', 'YRC', NULL),
(132, -1, 'None', 'None', 'None'),
(133, 132, 'SEvent_Type', 'Technical', 'None'),
(134, 133, 'SEvent_Type', 'Non Technical', 'None'),
(135, 134, 'Session', 'N16', NULL),
(136, 135, 'Session', 'A17', NULL),
(137, 136, 'Session', 'N17', NULL),
(138, 137, 'Session', 'A18', NULL),
(139, 138, 'Session', 'N18', NULL),
(140, 139, 'Session', 'A19', NULL),
(141, 140, 'Session', 'N19', NULL),
(142, 141, 'Session', 'A20', NULL),
(143, 142, 'Gender', 'Others', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Register_No` int NOT NULL,
  `First_Name` varchar(50) DEFAULT NULL,
  `Middle_Name` varchar(50) DEFAULT NULL,
  `Last_Name` varchar(50) DEFAULT NULL,
  `Gender_Ref` int DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Community_Ref` int DEFAULT NULL,
  `Caste` varchar(50) DEFAULT NULL,
  `MailID` varchar(50) DEFAULT NULL,
  `Aadhar_Card` varchar(15) DEFAULT NULL,
  `Primary_ContactNumber` varchar(15) DEFAULT NULL,
  `Secondary_ContactNumber` varchar(15) DEFAULT NULL,
  `Address_Line1` varchar(250) DEFAULT NULL,
  `Address_Line2` varchar(250) DEFAULT NULL,
  `Address_Line3` varchar(45) DEFAULT NULL,
  `Address_Line4` varchar(45) DEFAULT NULL,
  `Correspondence_Address` varchar(255) DEFAULT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Residential_Type_Ref` int DEFAULT NULL,
  `FA` int DEFAULT NULL,
  `Programme_Ref` int DEFAULT NULL,
  `Branch_Ref` int DEFAULT NULL,
  `Registration_Mode_Ref` int DEFAULT NULL,
  `Blood_Group_Ref` int DEFAULT NULL,
  `GATE_Cutoff_Mark` float DEFAULT NULL,
  `Admission_Date` date DEFAULT NULL,
  `Admission_Category_Ref` int DEFAULT NULL,
  `Scholarship_Received_Ref` int DEFAULT NULL,
  `Scholarship_Details` varchar(255) DEFAULT NULL,
  `NSS_NSO_YRC_Volunteer_Ref` int DEFAULT NULL,
  `Hostel_Block_Room` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Register_No`, `First_Name`, `Middle_Name`, `Last_Name`, `Gender_Ref`, `DOB`, `Community_Ref`, `Caste`, `MailID`, `Aadhar_Card`, `Primary_ContactNumber`, `Secondary_ContactNumber`, `Address_Line1`, `Address_Line2`, `Address_Line3`, `Address_Line4`, `Correspondence_Address`, `Photo`, `Residential_Type_Ref`, `FA`, `Programme_Ref`, `Branch_Ref`, `Registration_Mode_Ref`, `Blood_Group_Ref`, `GATE_Cutoff_Mark`, `Admission_Date`, `Admission_Category_Ref`, `Scholarship_Received_Ref`, `Scholarship_Details`, `NSS_NSO_YRC_Volunteer_Ref`, `Hostel_Block_Room`) VALUES
(4000, 'Anitha', '', 's', 67, '2020-10-02', 7, 'xxx', 'anithacse@gmail.com', 'adf333', 'zzz', '', 'zzz', 'zzz', 'zzz', 'zzz', 'zzz', 'photos/AULogo11601882158.jpg', 97, 5001, 99, 26, 88, 121, 345.55, '2020-10-09', 90, 87, 'zzz', 129, 'zzz'),
(6000, 'sss', '', 'sss', 67, '2020-10-10', 6, 'asasd', 'anithacse@gmail.com', '123456789123', '1234567890', '', 'yyy', 'yyy', 'yyy', 'sdfds', 'yyy', 'photos/Anitha_Photo1602148254.jpg', 96, 5001, 99, 26, 88, 121, 192, '2020-11-04', 91, -1, '', 129, 'fdgfdg'),
(2018503556, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2018503557, 'Sivaganesh', '', 'B', 66, '2000-03-22', 11, 'yyyxx', 'sivaganesh1903@gmail.com', '123456789000', '9876543210', '1234567890', 'House No', 'Street', 'City', '600001', 'House No, Street, City, 600001', '', 97, 123, 99, 26, 88, 124, 197, '2024-05-01', 90, 87, '', 131, ''),
(2018615001, 'yyy', '', 'yyy', 67, '2020-10-09', 5, 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'photos/AULogo11602068816.jpg', 96, 5001, 99, 26, 88, 122, 0, '2020-10-21', 90, 86, 'yyy', -1, 'yyy');

-- --------------------------------------------------------

--
-- Table structure for table `student_awards`
--

CREATE TABLE `student_awards` (
  `Award_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Award_Name` varchar(255) DEFAULT NULL,
  `Organizer_Name` varchar(255) DEFAULT NULL,
  `Award_Type_Ref` int DEFAULT NULL,
  `Award_Category_Ref` int DEFAULT NULL,
  `Place_of_Event` varchar(50) DEFAULT NULL,
  `Certificate_Copy` varchar(255) DEFAULT NULL,
  `Award_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_awards`
--

INSERT INTO `student_awards` (`Award_ID`, `Register_No`, `Award_Name`, `Organizer_Name`, `Award_Type_Ref`, `Award_Category_Ref`, `Place_of_Event`, `Certificate_Copy`, `Award_Date`) VALUES
(4, 2018503557, 'sasdsa', 'asdasdsa', 112, 115, 'sadsa', 'awardcertificates/Class TT-20201601888563.pdf', '2020-10-27');

-- --------------------------------------------------------

--
-- Table structure for table `student_courses`
--

CREATE TABLE `student_courses` (
  `Academic_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Course_Code` varchar(7) DEFAULT NULL,
  `Staff_ID` int DEFAULT NULL,
  `Session_Ref` int DEFAULT NULL,
  `Semester_Ref` int DEFAULT NULL,
  `Group_Ref` int DEFAULT NULL,
  `Class_Type_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_endsemmarks`
--

CREATE TABLE `student_endsemmarks` (
  `Mark_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Semester` int NOT NULL,
  `Course_Code` varchar(7) DEFAULT NULL,
  `Session_Ref` int DEFAULT NULL,
  `Grade` varchar(3) NOT NULL,
  `Credits` int DEFAULT NULL,
  `Entry_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_endsemmarks`
--

INSERT INTO `student_endsemmarks` (`Mark_ID`, `Register_No`, `Semester`, `Course_Code`, `Session_Ref`, `Grade`, `Credits`, `Entry_Date`) VALUES
(228, 4000, 1, 'HS7151', 134, 'A', 4, '2020-10-07'),
(229, 4000, 1, 'MA7151', 134, 'A', 4, '2020-10-07'),
(230, 4000, 1, 'PH7151', 134, 'B', 3, '2020-10-07'),
(231, 4000, 1, 'CY7151', 135, 'B', 3, '2020-10-07'),
(232, 4000, 1, 'GE7151', 134, 'A', 3, '2020-10-07'),
(233, 4000, 1, 'BS7161', 134, 'A', 2, '2020-10-07'),
(234, 4000, 1, 'GE7161', 136, 'A', 2, '2020-10-07'),
(235, 4000, 2, 'HS7251', 135, 'A', 4, '2020-10-07'),
(236, 4000, 2, 'MA7251', 135, 'A', 4, '2020-10-07'),
(237, 4000, 2, 'GE7251', 135, 'A', 3, '2020-10-07'),
(238, 4000, 2, 'GE7152', 135, 'A', 4, '2020-10-07'),
(239, 4000, 2, 'EC7253', 135, 'A', 3, '2020-10-07'),
(240, 4000, 2, 'CS7251', 135, 'A', 3, '2020-10-07'),
(241, 4000, 2, 'GE7162', 135, 'A', 2, '2020-10-07'),
(242, 4000, 2, 'CS7211', 137, 'A', 2, '2020-10-07'),
(243, 6000, 1, 'HS7151', 134, 'O', 4, '2020-10-08'),
(244, 6000, 1, 'MA7151', 134, 'A+', 4, '2020-10-08'),
(245, 6000, 1, 'PH7151', 134, 'O', 3, '2020-10-08'),
(246, 6000, 1, 'CY7151', 134, 'O', 3, '2020-10-08'),
(247, 6000, 1, 'GE7151', 134, 'O', 3, '2020-10-08'),
(248, 6000, 1, 'BS7161', 134, 'O', 2, '2020-10-08'),
(249, 6000, 1, 'GE7161', 141, 'O', 2, '2020-10-08');

-- --------------------------------------------------------

--
-- Table structure for table `student_events_participated`
--

CREATE TABLE `student_events_participated` (
  `Event_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Event_Name` varchar(50) DEFAULT NULL,
  `Event_Type_Ref` int DEFAULT NULL,
  `Participation_Type_Ref` int DEFAULT NULL,
  `Team_Size` int DEFAULT NULL,
  `Event_Organizer` varchar(50) DEFAULT NULL,
  `Event_Date` date DEFAULT NULL,
  `Prize_Won_Details` varchar(255) DEFAULT NULL,
  `Certificate_Copy` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_events_participated`
--

INSERT INTO `student_events_participated` (`Event_ID`, `Register_No`, `Event_Name`, `Event_Type_Ref`, `Participation_Type_Ref`, `Team_Size`, `Event_Organizer`, `Event_Date`, `Prize_Won_Details`, `Certificate_Copy`) VALUES
(22, 2018503557, 'event1b', 55, 119, 1, 'org1', '2020-10-31', 'prize1', ''),
(23, 2018503557, 'evec', 54, 119, 5, 'MITaa', '2020-10-23', 'xxx', '');

-- --------------------------------------------------------

--
-- Table structure for table `student_family_details`
--

CREATE TABLE `student_family_details` (
  `Family_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Father_Name` varchar(50) DEFAULT NULL,
  `Mother_Name` varchar(50) DEFAULT NULL,
  `Father_ContactNumber` varchar(15) DEFAULT NULL,
  `Mother_ContactNumber` varchar(15) DEFAULT NULL,
  `Father_MailID` varchar(50) DEFAULT NULL,
  `Mother_MailID` varchar(15) DEFAULT NULL,
  `Father_Occupation` varchar(255) DEFAULT NULL,
  `Mother_Occupation` varchar(255) DEFAULT NULL,
  `Father_Affilation` varchar(50) DEFAULT NULL,
  `Mother_Affilation` varchar(50) DEFAULT NULL,
  `Father_Company` varchar(50) DEFAULT NULL,
  `Mother_Company` varchar(50) DEFAULT NULL,
  `Parents_Annual_Income` bigint DEFAULT NULL,
  `Local_Guardian_Name` varchar(50) DEFAULT NULL,
  `Local_Guardian_Address` varchar(255) DEFAULT NULL,
  `Local_Guardian_Contact_Number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_family_details`
--

INSERT INTO `student_family_details` (`Family_ID`, `Register_No`, `Father_Name`, `Mother_Name`, `Father_ContactNumber`, `Mother_ContactNumber`, `Father_MailID`, `Mother_MailID`, `Father_Occupation`, `Mother_Occupation`, `Father_Affilation`, `Mother_Affilation`, `Father_Company`, `Mother_Company`, `Parents_Annual_Income`, `Local_Guardian_Name`, `Local_Guardian_Address`, `Local_Guardian_Contact_Number`) VALUES
(1, 2018503557, 'father', 'moher', '9876543217', '1111111111', 'father@gmail.co', 'mother@gmail.co', 'Occupationf', 'Occupationm', 'Affilationf', 'Affilationm', 'CompanyF', 'CompanyM', 6000000, 'Guardian', 'Guard1,Road1,City1,560077', '7890123459');

-- --------------------------------------------------------

--
-- Table structure for table `student_gpa`
--

CREATE TABLE `student_gpa` (
  `Gpa_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Semester` int NOT NULL,
  `GPA` float NOT NULL,
  `Grade_Sheet` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_gpa`
--

INSERT INTO `student_gpa` (`Gpa_ID`, `Register_No`, `Semester`, `GPA`, `Grade_Sheet`) VALUES
(10, 4000, 1, 7, 'gradesheets/dynamicarray1602054854.pdf'),
(11, 4000, 2, 8, 'gradesheets/Class TT-20201602054920.pdf'),
(12, 6000, 1, 7, 'gradesheets/dynamicarray1602153412.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `student_higherstudies`
--

CREATE TABLE `student_higherstudies` (
  `HigherStudies_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `University` varchar(255) DEFAULT NULL,
  `Degree` varchar(50) DEFAULT NULL,
  `Specialization` varchar(50) DEFAULT NULL,
  `Admission_Mode_Ref` int DEFAULT NULL,
  `Score` float DEFAULT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `LOR_Details` varchar(255) DEFAULT NULL,
  `Score_Card_Copy` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_higherstudies`
--

INSERT INTO `student_higherstudies` (`HigherStudies_ID`, `Register_No`, `University`, `Degree`, `Specialization`, `Admission_Mode_Ref`, `Score`, `Country`, `Location`, `LOR_Details`, `Score_Card_Copy`) VALUES
(2, 2018503557, 'IISC', 'M.Sc', 'Data Science', 104, 335, 'India', 'Bangalore', 'abcd', ''),
(4, 2018503557, 'IIM', 'MBA', 'General Management', 111, 1100, 'India', 'Delhi', 'None', '');

-- --------------------------------------------------------

--
-- Table structure for table `student_internalmarks`
--

CREATE TABLE `student_internalmarks` (
  `InternalMark_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Course_Code` varchar(7) DEFAULT NULL,
  `Session` varchar(5) DEFAULT NULL,
  `Staff_ID` int DEFAULT NULL,
  `Evaluation_Type_Ref` int DEFAULT NULL,
  `Max_Mark` int DEFAULT NULL,
  `Entry_Date` date DEFAULT NULL,
  `Mark_Scored` int DEFAULT NULL,
  `Weightage` float DEFAULT NULL,
  `Total` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_internship`
--

CREATE TABLE `student_internship` (
  `Internship_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Company` varchar(255) DEFAULT NULL,
  `Title` varchar(255) NOT NULL,
  `Order_Copy` varchar(45) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Stiphend_Option_Ref` int DEFAULT NULL,
  `Stiphend_Amount` float DEFAULT NULL,
  `Selection_Mode_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_internship`
--

INSERT INTO `student_internship` (`Internship_ID`, `Register_No`, `Company`, `Title`, `Order_Copy`, `Address`, `Start_Date`, `End_Date`, `Stiphend_Option_Ref`, `Stiphend_Amount`, `Selection_Mode_Ref`) VALUES
(4, 2018503557, 'CE', 'postal', '', '19 DOOR Chenna', '2020-10-14', '2020-10-30', 86, 234, 118),
(5, 2018503557, 'Wipro1', 'Systems Intern', 'interncertificates/TimeComplexity1602151235.p', 'xxx', '2020-10-20', '2020-10-14', 87, 0, 117);

-- --------------------------------------------------------

--
-- Table structure for table `student_placement`
--

CREATE TABLE `student_placement` (
  `Placement_ID` int NOT NULL,
  `Register_No` int NOT NULL,
  `Company` varchar(255) DEFAULT NULL,
  `Package` float DEFAULT NULL,
  `Appointment_Order_Copy` varchar(45) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `Designation` varchar(45) DEFAULT NULL,
  `Appointment_OrderNum` varchar(45) DEFAULT NULL,
  `Appointment_Letter_IssueDate` date DEFAULT NULL,
  `Joining_Date` date DEFAULT NULL,
  `Placement_Type_Ref` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_placement`
--

INSERT INTO `student_placement` (`Placement_ID`, `Register_No`, `Company`, `Package`, `Appointment_Order_Copy`, `Location`, `Designation`, `Appointment_OrderNum`, `Appointment_Letter_IssueDate`, `Joining_Date`, `Placement_Type_Ref`) VALUES
(4, 2018503557, 'yyyxx', 11.5, '', 'xss', 'rrr', 'AS2345', '2020-10-07', '2020-10-30', 103),
(5, 2018503557, 'xxx', 12.99, '', 'hello', 'rrr', '3r33', '2020-10-09', '2020-12-01', 102),
(7, 2018503557, 'yybbb', 13.4, '', 'chennai', 'sys engineer', 'AEorder', '2021-01-29', '2021-01-11', 103);

-- --------------------------------------------------------

--
-- Table structure for table `student_tcourses`
--

CREATE TABLE `student_tcourses` (
  `Tcourse_ID` int NOT NULL,
  `Degree` varchar(4) NOT NULL,
  `Semester` int NOT NULL,
  `Code` varchar(8) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Credit` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_tcourses`
--

INSERT INTO `student_tcourses` (`Tcourse_ID`, `Degree`, `Semester`, `Code`, `Title`, `Credit`) VALUES
(1, 'UG', 1, 'HS7151', 'Foundational  English', 4),
(2, 'UG', 1, 'MA7151', 'Mathematics I', 4),
(3, 'UG', 1, 'PH7151', 'Engineering Physics', 3),
(4, 'UG', 1, 'CY7151', 'Engineering Chemistry', 3),
(5, 'UG', 1, 'GE7151', 'Computing Techniques', 3),
(6, 'UG', 1, 'BS7161', 'Basic Sciences Laboratory', 2),
(7, 'UG', 1, 'GE7161', 'Computer Practices Laboratory', 2),
(8, 'UG', 2, 'HS7251', 'Technical English', 4),
(9, 'UG', 2, 'MA7251', 'Mathematics II', 4),
(10, 'UG', 2, 'GE7251', 'Environmental Science and Engineering', 3),
(11, 'UG', 2, 'GE7152', 'Engineering Graphics', 4),
(12, 'UG', 2, 'EC7253', 'Electronic Devices and Circuits for Computer Engin', 3),
(13, 'UG', 2, 'CS7251', 'Programming and Data Structures I', 3),
(14, 'UG', 2, 'GE7162', 'Engineering Practices Laboratory', 2),
(15, 'UG', 2, 'CS7211', 'Programming and Data Structures Laboratory I', 2),
(16, 'UG', 3, 'CS7301', 'Object Oriented Programming', 3),
(17, 'UG', 3, 'CS7302', 'Programming and Data Structures II', 3),
(18, 'UG', 3, 'CS7351', 'Software Engineering', 3),
(19, 'UG', 3, 'EE7306', 'Electrical Engineering and Control Systems', 3),
(20, 'UG', 3, 'IT7351', 'Digital Principles and Design', 3),
(21, 'UG', 3, 'MA7359', 'Algebra and Number Theory', 4),
(22, 'UG', 3, 'CS7311', 'Digital Laboratory', 2),
(23, 'UG', 3, 'CS7312', 'Programming and Data Structures\nLaboratory II', 2),
(24, 'UG', 4, 'CS7401', 'Database Management Systems', 3),
(25, 'UG', 4, 'CS7402', 'Design and Analysis of Algorithms', 3),
(26, 'UG', 4, 'CS7451', 'Computer Architecture', 4),
(27, 'UG', 4, 'CS7452', 'Operating Systems', 3),
(28, 'UG', 4, 'MA7355', 'Probability and Queueing Theory', 4),
(29, 'UG', 4, 'MG7451', 'Principles of Management', 3),
(30, 'UG', 4, 'CS7411', 'Database\nManagement Systems Laboratory', 2),
(31, 'UG', 4, 'CS7412', 'Operating Systems Laboratory', 2),
(32, 'UG', 5, 'CS7501', 'Data Communication and Computer\nNetworks', 3),
(33, 'UG', 5, 'CS7502', 'Embedded System Design', 4),
(34, 'UG', 5, 'CS7503', 'Object Oriented Analysis and Design', 3),
(35, 'UG', 5, 'CS7504', 'Theory of Computation', 3),
(36, 'UG', 5, 'CS7551', 'Digital Signal Processing', 3),
(37, 'UG', 5, 'CSELE1', 'Professional Elective-I', 3),
(38, 'UG', 5, 'CS7511', 'Case Tools Laboratory', 2),
(39, 'UG', 5, 'CS7512', 'Computer Networks Laboratory', 2),
(40, 'UG', 6, 'CS7601', 'Compiler Design', 3),
(41, 'UG', 6, 'CS7602', 'Machine Learning Techniques', 3),
(42, 'UG', 6, 'CS7603', 'Parallel and Distributed Computing', 3),
(43, 'UG', 6, 'CS7604', 'Web Programming', 3),
(44, 'UG', 6, 'CSELE2', 'Professional Elective-II', 3),
(45, 'UG', 6, 'CSELE3', 'Professional Elective-III', 3),
(46, 'UG', 6, 'CS7611', 'Compiler Laboratory', 2),
(47, 'UG', 6, 'CS7612', 'Web Technology Laboratory', 2),
(48, 'UG', 7, 'CS7701', 'Cloud Computing Techniques', 4),
(49, 'UG', 7, 'CS7702', 'Security in Computing', 3),
(50, 'UG', 7, 'CS7703', 'Wireless Networks', 3),
(51, 'UG', 7, 'CSELE4', 'Professional Elective-IV', 3),
(52, 'UG', 7, 'CSELE5', 'Professional Elective-V', 3),
(53, 'UG', 7, 'CSOELE', 'Open Elective-I ', 3),
(54, 'UG', 7, 'CS7711', 'Creative and Innovative Project ', 2),
(55, 'UG', 7, 'CS7712', 'Security Laboratory', 2),
(56, 'UG', 7, 'CS7713', 'Comprehension and Technical Report', 1),
(60, 'PG', 1, 'MA7153', 'Advanced Mathematics for Computing', 4),
(61, 'PG', 1, 'CP7151', 'Advanced Data Structures and\nAlgorithms', 3),
(62, 'PG', 1, 'CP7152', 'Advanced Software Engineering', 3),
(63, 'PG', 1, 'CP7153', 'Advances in Operating Systems', 3),
(64, 'PG', 1, 'CP7154', 'Multi Core Architectures', 3),
(65, 'PG', 1, 'CP7161', 'Advanced Data Structures and Algorithms Lab', 2),
(66, 'PG', 1, 'CP7162', 'Professional Practices', 1),
(67, 'PG', 2, 'CP7252', 'Compiler Optimization Techniques', 3),
(68, 'PG', 2, 'CP7253', 'Machine Learning Techniques', 4),
(69, 'PG', 2, 'CP7251', 'Cloud Computing Technologies', 3),
(70, 'PG', 2, 'CP7155', 'Networking Technologies', 3),
(71, 'PG', 2, 'SO7251', 'Advanced Database Management Systems', 3),
(72, 'PG', 2, 'PELE1', 'Elective I', 3),
(73, 'PG', 2, 'CP 7211', 'Cloud Computing Lab', 2),
(74, 'PG', 3, 'CP 7254', 'Security Principles and Practices', 3),
(75, 'PG', 3, 'PELE2', 'Elective II', 3),
(76, 'PG', 3, 'PELE3', 'Elective III', 3),
(77, 'PG', 3, 'PELE4', 'Elective IV', 3),
(78, 'PG', 3, 'CP7311', 'Project Work Phase I', 6),
(80, 'UG', 8, 'CS7811', 'Project Work', 10),
(81, 'UG', 8, 'CSELE6', 'Professional Elective-VI', 3),
(82, 'UG', 8, 'OELE2', 'Open Elective-II', 3),
(83, 'PG', 4, 'CP7411', 'Project Work Phase II', 12);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_ID` int NOT NULL,
  `username` int NOT NULL,
  `user_role` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_ID`, `username`, `user_role`, `password`, `status`, `create_time`) VALUES
(2016506001, 2016506000, NULL, '12345', NULL, '2020-10-01 04:11:17'),
(2016506002, 2016506001, NULL, '12345', NULL, '2020-10-01 04:11:49'),
(2016506003, 4000, NULL, '1234', 'Y', '2020-10-01 04:12:12'),
(2016506004, 2018615001, NULL, '1234', NULL, '2020-10-07 11:05:54'),
(2016506005, 6000, NULL, '1234', NULL, '2020-10-08 06:06:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`Credentials_ID`),
  ADD UNIQUE KEY `Username` (`Username`(128)),
  ADD KEY `Register_No` (`Register_No`) USING BTREE;

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`Person_ID`),
  ADD UNIQUE KEY `Person_ID_UNIQUE` (`Person_ID`),
  ADD KEY `Gender_Reference_ID_FK_idx` (`Gender_Ref`),
  ADD KEY `Community_Reference_ID_FK_idx` (`Community_Ref`),
  ADD KEY `Marital_Status_Reference_ID_FK_idx` (`Marital_Status_Ref`),
  ADD KEY `Prefix_Reference_ID_FK_idx` (`Prefix_Ref`);

--
-- Indexes for table `person_guestlecture`
--
ALTER TABLE `person_guestlecture`
  ADD PRIMARY KEY (`GuestLecture_ID`),
  ADD UNIQUE KEY `GuestLecture_ID_UNIQUE` (`GuestLecture_ID`),
  ADD KEY `Level_Reference_ID_FK_idx` (`Level_Ref`),
  ADD KEY `Person_ID_FK215` (`Person_ID`);

--
-- Indexes for table `person_reference_table`
--
ALTER TABLE `person_reference_table`
  ADD PRIMARY KEY (`Reference_ID`),
  ADD UNIQUE KEY `Reference_ID_UNIQUE` (`Reference_ID`),
  ADD UNIQUE KEY `Ref_Code` (`Ref_Code`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`Register_No`),
  ADD UNIQUE KEY `Person_ID_UNIQUE` (`Register_No`),
  ADD KEY `Gender_Reference_ID_FK_idx` (`Gender_Ref`),
  ADD KEY `Resedential_Reference_ID_FK_idx` (`Residential_Type_Ref`),
  ADD KEY `Programme_Reference_ID_FK_idx` (`Programme_Ref`),
  ADD KEY `Branch_Reference_ID_FK_idx` (`Branch_Ref`),
  ADD KEY `Community_Reference_ID_FK_idx` (`Community_Ref`),
  ADD KEY `Registration_Mode_FK_idx` (`Registration_Mode_Ref`),
  ADD KEY `Blood_Group_FK_idx` (`Blood_Group_Ref`),
  ADD KEY `Admission_Category_FK_idx` (`Admission_Category_Ref`),
  ADD KEY `Scholarship_FK_idx` (`Scholarship_Received_Ref`),
  ADD KEY `Volunteer_FK_idx` (`NSS_NSO_YRC_Volunteer_Ref`);

--
-- Indexes for table `student_awards`
--
ALTER TABLE `student_awards`
  ADD PRIMARY KEY (`Award_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Award_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Award_Type_FK_idx` (`Award_Type_Ref`),
  ADD KEY `Award_Category_FK_idx` (`Award_Category_Ref`);

--
-- Indexes for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD PRIMARY KEY (`Academic_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Academic_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Class_Type_Reference_ID_FK2_idx` (`Class_Type_Ref`),
  ADD KEY `Session_FK_idx` (`Session_Ref`),
  ADD KEY `Semester_FK_idx` (`Semester_Ref`),
  ADD KEY `Group_FK_idx` (`Group_Ref`);

--
-- Indexes for table `student_endsemmarks`
--
ALTER TABLE `student_endsemmarks`
  ADD PRIMARY KEY (`Mark_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Mark_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Session_FK_idx2` (`Session_Ref`);

--
-- Indexes for table `student_events_participated`
--
ALTER TABLE `student_events_participated`
  ADD PRIMARY KEY (`Event_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Event_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Event_Type_FK_idx` (`Event_Type_Ref`),
  ADD KEY `Participation_Type_FK_idx` (`Participation_Type_Ref`);

--
-- Indexes for table `student_family_details`
--
ALTER TABLE `student_family_details`
  ADD PRIMARY KEY (`Family_ID`),
  ADD UNIQUE KEY `Family_ID_UNIQUE` (`Family_ID`),
  ADD KEY `Register_Num_FK` (`Register_No`);

--
-- Indexes for table `student_gpa`
--
ALTER TABLE `student_gpa`
  ADD PRIMARY KEY (`Gpa_ID`);

--
-- Indexes for table `student_higherstudies`
--
ALTER TABLE `student_higherstudies`
  ADD PRIMARY KEY (`HigherStudies_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`HigherStudies_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Admission_Mode_FK_idx` (`Admission_Mode_Ref`);

--
-- Indexes for table `student_internalmarks`
--
ALTER TABLE `student_internalmarks`
  ADD PRIMARY KEY (`InternalMark_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`InternalMark_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`);

--
-- Indexes for table `student_internship`
--
ALTER TABLE `student_internship`
  ADD PRIMARY KEY (`Internship_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Internship_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Stiphend_Option_FK_idx` (`Stiphend_Option_Ref`),
  ADD KEY `Stiphend_Mode_FK_idx` (`Selection_Mode_Ref`);

--
-- Indexes for table `student_placement`
--
ALTER TABLE `student_placement`
  ADD PRIMARY KEY (`Placement_ID`),
  ADD UNIQUE KEY `Academic_ID_UNIQUE` (`Placement_ID`),
  ADD KEY `Person_ID_FK219` (`Register_No`),
  ADD KEY `Placement_Type_FK_idx` (`Placement_Type_Ref`);

--
-- Indexes for table `student_tcourses`
--
ALTER TABLE `student_tcourses`
  ADD PRIMARY KEY (`Tcourse_ID`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_ID`),
  ADD UNIQUE KEY `user_ID_UNIQUE` (`user_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `credentials`
--
ALTER TABLE `credentials`
  MODIFY `Credentials_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `person_guestlecture`
--
ALTER TABLE `person_guestlecture`
  MODIFY `GuestLecture_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `person_reference_table`
--
ALTER TABLE `person_reference_table`
  MODIFY `Reference_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `student_awards`
--
ALTER TABLE `student_awards`
  MODIFY `Award_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_courses`
--
ALTER TABLE `student_courses`
  MODIFY `Academic_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_endsemmarks`
--
ALTER TABLE `student_endsemmarks`
  MODIFY `Mark_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `student_events_participated`
--
ALTER TABLE `student_events_participated`
  MODIFY `Event_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `student_family_details`
--
ALTER TABLE `student_family_details`
  MODIFY `Family_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student_gpa`
--
ALTER TABLE `student_gpa`
  MODIFY `Gpa_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student_higherstudies`
--
ALTER TABLE `student_higherstudies`
  MODIFY `HigherStudies_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_internalmarks`
--
ALTER TABLE `student_internalmarks`
  MODIFY `InternalMark_ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_internship`
--
ALTER TABLE `student_internship`
  MODIFY `Internship_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student_placement`
--
ALTER TABLE `student_placement`
  MODIFY `Placement_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student_tcourses`
--
ALTER TABLE `student_tcourses`
  MODIFY `Tcourse_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2016506006;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `credentials`
--
ALTER TABLE `credentials`
  ADD CONSTRAINT `fk_Register_No` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `person_guestlecture`
--
ALTER TABLE `person_guestlecture`
  ADD CONSTRAINT `Level_Reference_ID_FK2` FOREIGN KEY (`Level_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Person_ID_FK215` FOREIGN KEY (`Person_ID`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `Admission_Category_FK` FOREIGN KEY (`Admission_Category_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Blood_Group_FK` FOREIGN KEY (`Blood_Group_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Branch_Reference_ID_FK` FOREIGN KEY (`Branch_Ref`) REFERENCES `person_reference_table` (`Ref_Code`),
  ADD CONSTRAINT `Community_Reference_ID_FK` FOREIGN KEY (`Community_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Gender_Reference_ID_FK` FOREIGN KEY (`Gender_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Programme_Reference_ID_FK` FOREIGN KEY (`Programme_Ref`) REFERENCES `person_reference_table` (`Ref_Code`),
  ADD CONSTRAINT `Registration_Mode_FK` FOREIGN KEY (`Registration_Mode_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Resedential_Reference_ID_FK` FOREIGN KEY (`Residential_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Scholarship_FK` FOREIGN KEY (`Scholarship_Received_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Volunteer_FK` FOREIGN KEY (`NSS_NSO_YRC_Volunteer_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_awards`
--
ALTER TABLE `student_awards`
  ADD CONSTRAINT `Award_Category_FK` FOREIGN KEY (`Award_Category_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Award_Type_FK` FOREIGN KEY (`Award_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Person_ID_FK21902` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_courses`
--
ALTER TABLE `student_courses`
  ADD CONSTRAINT `Class_Type_Reference_ID_FK2` FOREIGN KEY (`Class_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Group_FK` FOREIGN KEY (`Group_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Person_ID_FK219` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Semester_FK` FOREIGN KEY (`Semester_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Session_FK` FOREIGN KEY (`Session_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_endsemmarks`
--
ALTER TABLE `student_endsemmarks`
  ADD CONSTRAINT `Person_ID_FK21900` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Session_FK2` FOREIGN KEY (`Session_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_events_participated`
--
ALTER TABLE `student_events_participated`
  ADD CONSTRAINT `Event_Type_FK` FOREIGN KEY (`Event_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Participation_Type_FK` FOREIGN KEY (`Participation_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Person_ID_FK219020` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_family_details`
--
ALTER TABLE `student_family_details`
  ADD CONSTRAINT `Register_Num_FK` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_higherstudies`
--
ALTER TABLE `student_higherstudies`
  ADD CONSTRAINT `Admission_Mode_FK` FOREIGN KEY (`Admission_Mode_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Person_ID_FK21901` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_internalmarks`
--
ALTER TABLE `student_internalmarks`
  ADD CONSTRAINT `Person_ID_FK219030` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_internship`
--
ALTER TABLE `student_internship`
  ADD CONSTRAINT `Person_ID_FK21903` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Stiphend_Mode_FK` FOREIGN KEY (`Selection_Mode_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Stiphend_Option_FK` FOREIGN KEY (`Stiphend_Option_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_placement`
--
ALTER TABLE `student_placement`
  ADD CONSTRAINT `Person_ID_FK2190` FOREIGN KEY (`Register_No`) REFERENCES `student` (`Register_No`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Placement_Type_FK` FOREIGN KEY (`Placement_Type_Ref`) REFERENCES `person_reference_table` (`Ref_Code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
